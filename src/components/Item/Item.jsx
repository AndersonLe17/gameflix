import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../../context/cartContext";

const Item = ({producto}) => {
  const navigate = useNavigate();
  const {addProduct} = useCartContext();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3" onClick={() => navigate(`/product/${producto.id}`)}>
      <Card className="shadow rounded-3">
        <Card.Img variant="top" src={producto.imagen} className="rounded-top rounded-3 p-2"/>
        <Card.Body className="py-1">
          <p className={(producto.stock > 10)? 'text-success m-0': (producto.stock === 0)? 'text-danger m-0':'text-warning m-0'}>
            {(producto.stock > 10)? "Disponible": (producto.stock === 0)? "No disponible":"Pocas unidades"}
            </p>
          <p className="m-0 card-item-name">{producto.nombre}</p>
          <div className="d-flex justify-content-between">
            <p className="mt-2 fw-bold fs-5">S/{producto.precio.toFixed(2)}</p>
            <Button variant="dark" className="h-50 px-4" onClick={(e) => {
              e.stopPropagation();
              addProduct(producto,1);
            }}>Agregar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;