import { SlHandbag } from "react-icons/sl";
import { useCartContext } from "../../context/cartContext";

const CartWidget = () => {
  const {getCartQty} = useCartContext();
  return (
    <>
      <SlHandbag className="fs-2" />
      <span className="d-block">Mi Bolsa</span>
      <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
        {(getCartQty() === 0)? null: getCartQty()}
      </span>
    </>
  );
};

export default CartWidget;