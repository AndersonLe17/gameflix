import Button from "react-bootstrap/Button";
import { ItemCount } from "./ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";

export const ItemDetail = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProducto(data);
    });
  }, [productId]);

  return (
    <div className="container py-5">
      <div className="row gy-2 gx-0 gx-lg-5">
        <div className="col-12 col-lg-6">
          <div>
            <img
              src={producto.imagen}
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6">
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
            <div className="row">
              <div className="col col-lg-3">
                <ItemCount stock={producto.stock} />
              </div>
              <div className="col">
                <Button variant="dark">Agregar al Carrito</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
