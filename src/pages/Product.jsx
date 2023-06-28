import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRef = doc(db, "productos", id);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          setProductData(productSnapshot.data());
        } else {
          setError("El producto no existe");
        }
      } catch (error) {
        setError("Error al obtener los datos del producto");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="loading">Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const handleAddToCart = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: <p>Producto añadido</p>,
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <section className="product">
      <div className="product__container container">
        <h1 className="product__title">|| Producto </h1>
        <div className="product__content">
          <img src={productData?.imgUrl} alt="" />
          <div className="product__info">
            <div>
              <span className="product__category">
                {productData?.productCategory}
              </span>
              <h2 className="product__name">{productData?.productName} </h2>
              <ul>
                <li>Marca: {productData?.productBrand}</li>
                <li>SKU: {productData?.productSku}</li>
                <li>Color: {productData?.productColor}</li>
              </ul>
              <p className="product__description">
                {productData?.productDescription}
              </p>
              <span className="product__price-last">
                Precio: S/.{productData?.productLastPrice}
              </span>
              <span className="product__price">
                Precio: S/.{productData?.productPrice}
              </span>
            </div>
            <button className="product__btn" onClick={handleAddToCart}>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
