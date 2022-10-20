import Card from "react-bootstrap/Card";

export const CardItem = ({img, state, name, price}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3">
      <Card className="shadow rounded-3">
        <Card.Img variant="top" src={img} className="rounded-top rounded-3 p-2"/>
        <Card.Body className="py-1">
          <p className={state? 'text-success m-0':'text-danger m-0'}>{state? "Disponible":"No disponible"}</p>
          <p className="m-0">{name}</p>
          <p className="mt-2 fw-bold fs-5">S/{price}</p>
        </Card.Body>
      </Card>
    </div>
  );
};
