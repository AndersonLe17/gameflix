import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Item = ({id, img, stock, name, price}) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3" onClick={() => navigate(`/product/${id}`)}>
      <Card className="shadow rounded-3">
        <Card.Img variant="top" src={img} className="rounded-top rounded-3 p-2"/>
        <Card.Body className="py-1">
          <p className={(stock > 10)? 'text-success m-0': (stock === 0)? 'text-danger m-0':'text-warning m-0'}>
            {(stock > 10)? "Disponible": (stock === 0)? "No disponible":"Pocas unidades"}
            </p>
          <p className="m-0 card-item-name">{name}</p>
          <p className="mt-2 fw-bold fs-5">S/{price.toFixed(2)}</p>
        </Card.Body>
      </Card>
    </div>
  );
};
