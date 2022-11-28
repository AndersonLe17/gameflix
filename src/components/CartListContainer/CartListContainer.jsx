import Table from 'react-bootstrap/Table';
import { CartItemCounter } from '../CartItemCounter';
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CartListContainer = () => {
  const navigate = useNavigate();
  const {cart, getTotal, removeProduct} = useCartContext();

  return (
    <div className="container py-4">
      <h2 className='text-uppercase fw-bold text-center'>Carrito de Compras</h2>
      {(cart.length === 0)? <p className='text-center'>No hay items, Agrega Productos <Link to={"/category/all"}>Aqui</Link></p> : 
      <>
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
          <Button variant='success' className='w-50'>Procesar</Button>
        </div>
      </>
      }
    </div>
  );
};

export default CartListContainer;
