import { useState } from "react";
// import profile1 from "../assets/images/profile-1.jpg";
// import profile2 from "../assets/images/profile-2.jpg";
// import profile3 from "../assets/images/profile-3.jpg";
// import profile4 from "../assets/images/profile-4.jpg";
// import profile5 from "../assets/images/profile-5.jpg";
// import profile6 from "../assets/images/profile-6.jpg";
// import profile7 from "../assets/images/profile-7.jpg";
import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { useCallback } from "react";
import { useEffect } from "react";
import ContentLoader from "react-content-loader";

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
  }, []);

  return (
    <section className="platform2">
      <div className="platform2__container container">
        <div className="platform2__hero">
          <h2>Bienvenida Luz</h2>
          <ul className="platform2__list">
            <li>
              <i className="fa-duotone fa-flag"></i> Reportar vendedor
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
                  <img src={data.img} alt="" />
                  <p className="platform2__product-category">
                    {data.categoria}
                  </p>
                  <p>
                    {data.name} - S/{data.precio}
                  </p>
                  <button>Añadir al carrito</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
