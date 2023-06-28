import { useState } from "react";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { useCallback } from "react";
import { useEffect } from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Platform2() {
  const [dataList, setDataList] = useState(null);

  const dataCollectionRef = collection(db, "productos");
  const getDataList = useCallback(async () => {
    try {
      const data = await getDocs(dataCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataList(filteredData);
    } catch (error) {
      console.error(error);
    }
  }, [dataCollectionRef]);
  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <section className="platform2">
      <div className="platform2__container container">
        <div className="platform2__hero">
          <h2>Bienvenida Luz</h2>
          <ul className="platform2__list">
            <li>
              <Link className="platform2__report " to={"/reportar-vendedor"}>
                <span className="fa-duotone fa-flag"></span> Reportar vendedor
              </Link>
            </li>
            <li>
              <i className="fa-duotone fa-books"></i> Cursos
            </li>
            <li>
              <i className="fa-duotone fa-comments-question"></i> Solicitar
              ayuda
            </li>
            <li>
              <i className="fa-duotone fa-cart-shopping"></i> Pedidos
            </li>
            <li>
              <i className="fa-duotone fa-cart-shopping-fast"></i> Seguir
              pedidos
            </li>
          </ul>
        </div>
        <div className="platform2__content">
          <div className="platform2__category">
            <h3>Categorias</h3>
            <ul>
              <li>Promociones</li>
              <li>Moda</li>
              <li>Belleza</li>
              <li>Papeleria</li>
              <li>Hogar</li>
            </ul>
          </div>
          <div className="platform2__products">
            {dataList == null ? (
              <div className="platform2__products">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div className="platform2__product" key={index}>
                    <ContentLoader
                      speed={2}
                      width={221}
                      height={291}
                      viewBox="0 0 221 291"
                      backgroundColor="#f3f3f3"
                      foregroundColor="#ecebeb"
                    >
                      <rect
                        x="6"
                        y="31"
                        rx="0"
                        ry="0"
                        width="205"
                        height="138"
                      />
                      <rect
                        x="47"
                        y="186"
                        rx="0"
                        ry="0"
                        width="117"
                        height="16"
                      />
                      <rect
                        x="40"
                        y="215"
                        rx="0"
                        ry="0"
                        width="136"
                        height="20"
                      />
                      <rect
                        x="19"
                        y="246"
                        rx="0"
                        ry="0"
                        width="179"
                        height="29"
                      />
                    </ContentLoader>
                  </div>
                ))}
              </div>
            ) : (
              dataList.map((data) => (
                <div key={data.id} className="platform2__product">
                  <Link to={`/producto-detalle/${data.id}`}>
                    <img src={data.imgUrl} alt="" />
                  </Link>
                  <p className="platform2__product-category">
                    {data.productCategory}
                  </p>
                  <p>
                    {data.productName} - S/{data.productPrice}
                  </p>
                  <button onClick={handleAddToCart}>Añadir al carrito</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
