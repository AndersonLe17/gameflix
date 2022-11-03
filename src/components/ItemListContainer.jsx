import { useEffect, useState } from "react";
import { Item } from "./Item";
import { getProducts } from "../api/products";
import { Loader } from "./Loader";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductos([]);
    setLoading(true);
    getProducts(categoryName)
      .then((items) => { setProductos(items); setLoading(false); })
      .catch((e) => console.log(e));
  }, [categoryName]);

  

  return (
    <div className="container-fluid container-lg py-3">
      <div className="row g-3">
        {loading ? <Loader /> : null}
        {productos.map((producto) => {
          return (
            <Item key={producto.id}
              id={producto.id}
              img={producto.imagen}
              stock={(producto.stock)}
              name={producto.nombre}
              price={producto.precio}
            />
          );
        })}
        
      </div>
    </div>
  );
};
