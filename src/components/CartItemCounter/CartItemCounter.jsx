import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

const CartItemCounter = ({qty, stock, id, onChangeQty}) => {
  const [contador, setContador] = useState(qty);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
    console.log(contador);
    onChangeQty(id,contador);
  };

  const handleSubstract = () => {
    if (contador > 1) {
      setContador(contador - 1);
    };
    console.log(contador);
    onChangeQty(id,contador);
  };

  return (
    <InputGroup>
      <Button variant="outline-dark" onClick={handleSubstract}>
        -
      </Button>
      <Form.Control type='number' value={contador} className="text-center" onChange={e => setContador(e.target.value)}/>
      <Button variant="outline-dark" onClick={handleAdd}>
        +
      </Button>
    </InputGroup>
  );
};

export default CartItemCounter;
