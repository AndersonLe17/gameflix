import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {
  const [contador, setContador] = useState(1);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleSubstract = () => {
    if (contador > 1) setContador(contador - 1);
  };

  return (
    <div className="row">
      <div className="col col-lg-3">
        <InputGroup className="mb-3">
          <Button variant="outline-dark" id="button-addon1" onClick={handleSubstract}>
            -
          </Button>
          <Form.Control type='number' value={contador} className="text-center" onChange={e => setContador(e.target.value)}/>
          <Button variant="outline-dark" id="button-addon1" onClick={handleAdd}>
            +
          </Button>
        </InputGroup>
      </div>
      <div className="col">
        <Button variant="dark" onClick={() => {if(contador) onAdd(contador)}}>Agregar al Carrito</Button>
      </div>
    </div>
    
  );
};

export default ItemCount;