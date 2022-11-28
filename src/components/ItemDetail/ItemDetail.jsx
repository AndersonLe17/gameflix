import { ItemCount } from "../ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/products";
import { Loader } from "../Loader";
import { useCartContext } from "../../context/cartContext";

const ItemDetail = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const {addProduct} = useCartContext();

  useEffect(() => {
    setLoading(true);
    getProduct(productId).then((data) => {
      setProducto(data);
      setLoading(false);
    });
  }, [productId]);

  const handleAdd = (qty) => {
    addProduct(producto, qty);
    
  };

  return (
    <div className="container py-5">
      {loading ? <Loader /> : null}
      <div className="row gy-2 gx-0 gx-lg-5">
        <div className="col-12 col-lg-6">
          <div>
            <img
              src={producto.imagen}
              className="img-fluid rounded"
              alt={producto.imagen}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6" style={{display: loading? "none" : null}}>
          <div>
            <h3 className="fw-bold mb-3">
              {producto.nombre}
            </h3>
            <p className="fw-semibold mb-3 h4">S/ {(producto.precio)? Number(producto.precio).toFixed(2):'0.00'}</p>
            <p className="fw-normal mb-3">{producto.descripcion}</p>
            <p className="fw-semibold mb-3">
              Stock: {producto.stock}&nbsp;
              <span className={(producto.stock > 10)?'text-success':(producto.stock === 0)?'text-danger':'text-warning'}>
                {(producto.stock > 10)?'DISPONIBLE':(producto.stock === 0)?'NO DISPONIBLE':'POCAS UNIDADES'}
              </span>
            </p>
            <ItemCount stock={producto.stock} onAdd={handleAdd}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;