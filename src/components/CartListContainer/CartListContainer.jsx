import Table from 'react-bootstrap/Table';
import { CartItemCounter } from '../CartItemCounter';
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addOrder } from '../../api/order';
import { updateManyProducts } from '../../api/products';
import { ToastMessage } from '../ToastMessage';

const CartListContainer = () => {
  const {cart, getTotal, removeProduct, clear} = useCartContext();
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleCloseToast = () => setToast(false);
  const handleShowToast = () => setToast(true);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [ticket, setTicket] = useState("");
  
  const createOrder = async () => {
    const items = cart.map(({id, nombre, qty, precio}) => ({id, title: nombre, qty, price: precio}));
    
    const order = {
      buyer: {name, phone, email},
      items: items,
      total: (getTotal()).toFixed(2)
    };
    
    setTicket(await addOrder(order));
    
    await updateManyProducts(items);
    
    clear();
    handleClose();
    handleShowToast();
  };

  return (
    <div className="container py-4">
      <h2 className='text-uppercase fw-bold text-center'>Carrito de Compras</h2>
      {(cart.length === 0)? <p className='text-center'>No hay items, Agrega Productos <Link to={"/category/all"}>Aqui</Link></p> : 
      <div>
        <Table className='bg-white' responsive>
          <thead className='text-center'>
            <tr>
              <th colSpan={2} className='text-start'>Producto</th>
              <th>Precio Ud.</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className='text-center align-middle'>
            {cart.map(item => {
              return (
                <tr key={item.id}>
                  <td><img src={item.imagen} alt={item.nombre}/></td>
                  <td className='text-start'>{item.nombre}</td>
                  <td>S/{item.precio.toFixed(2)}</td>
                  <td><CartItemCounter qty={item.qty} stock={item.stock} id={item.id}/></td>
                  <td>S/{(item.precio * item.qty).toFixed(2)}</td>
                  <td><a href='#' onClick={(e) => {e.preventDefault(); removeProduct(item.id)}}><BsTrash className='text-danger'/></a></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table className='w-50 bg-white text-center ms-auto me-auto me-md-0 ms-md-auto mt-2'>
            <thead>
              <tr>
                <th colSpan={2}>Resumen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Sub Total</th>
                <td>S/{(getTotal()*0.82).toFixed(2)}</td>
              </tr>
              <tr>
                <th>IGV</th>
                <td>S/{(getTotal()*0.18).toFixed(2)}</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>S/{getTotal().toFixed(2)}</td>
              </tr>
            </tbody>
        </Table>
        <div className='text-center text-md-end'>
          <Button variant='success' className='w-50' onClick={handleShow}>Procesar</Button>
        </div>
      </div>
      }
      <ToastMessage ticket={ticket} show={toast} handleClose={handleCloseToast}/>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h3 className='text-center '>Procesar Pedido</h3>
          <div className='row g-3'>
            <FloatingLabel controlId="iNombres" label="Nombres y Apellidos">
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Nombres y Apellidos"/>
            </FloatingLabel>
            <FloatingLabel controlId="iCelular" label="N° de Celular">
              <Form.Control type="tel" onChange={(e) => setPhone(e.target.value)} placeholder="N° de Celular"/>
            </FloatingLabel>
            <FloatingLabel controlId="iEmail" label="Correo Electronico">
              <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electronico"/>
            </FloatingLabel>
            <Button variant='success' onClick={createOrder}>Procesar</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartListContainer;
