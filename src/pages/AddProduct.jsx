import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AddProduct() {
  // Referencia a la colección "productos" en Firestore
  const dataCollectionProductoRef = collection(db, "productos");

  // Estados para almacenar los valores del campo de fomulario
  const [productCategory, setProductCategory] = useState("");
  const [imagen, setImagen] = useState(null);
  const [productBrand, setProductBrand] = useState("");
  const [productSku, setProductSku] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productLastPrice, setProductLastPrice] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");

  //Estados relacionados con la carga de archivos
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Funcion para el manejo de envio de datos de formulario
  const onSubmitProduct = async () => {
    const MySwal = withReactContent(Swal);
    // Validar que los campos no esten vacios
    if (imagen === null) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Verificar el tamaño del archivo
    if (imagen.size > 8 * 1024 * 1024) {
      alert("El tamaño del archivo debe ser menor a 8MB");
      return;
    }

    try {
      setUploading(true); // Deshabilitar el formulario y el botón de envío
      // Referencia única para el archivo a subir
      const imgRef = ref(storage, `productos/${imagen.name}`);

      //Crear una tarea de carga de archivos resumible
      const uploadTask = uploadBytesResumable(imgRef, imagen);
      uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Carga en progreso" + progress + "%");
        setProgress(progress);
      });

      //Subir el archivo y obtener su URL de descarga
      await uploadBytes(imgRef, imagen);
      const imgUrl = await getDownloadURL(imgRef);

      //Agregar los datos a Firestore | colección "productos"
      await addDoc(dataCollectionProductoRef, {
        imgUrl: imgUrl,
        productCategory: productCategory,
        productBrand: productBrand,
        productSku: productSku,
        productColor: productColor,
        productDescription: productDescription,
        productLastPrice: productLastPrice,
        productPrice: productPrice,
        productName: productName,
        uui: crypto.randomUUID(),
      });
      MySwal.fire({
        title: <p>Producto añadido correctamente</p>,
        position: "center",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
      setProgress(0); // Reiniciar el progreso de carga
      setProductCategory("");
      setImagen(null);
      setProductBrand("");
      setProductSku("");
      setProductColor("");
      setProductDescription("");
      setProductLastPrice("");
      setProductPrice("");
      setProductName("");
    }
  };

  return (
    <section className="add-product">
      <div className="add-product__container container">
        <h1>Añadir productos</h1>
        <form action="" className="add-product__form">
          <div className="add-product__form-group">
            <label htmlFor="">Nombre del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Categoria del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductCategory(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Cargar imagen: </label>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setImagen(e.target.files[0]);
                }
              }}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Marca del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductBrand(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">SKU del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductSku(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Color/es del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductColor(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Descipción del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Precio sin oferta del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductLastPrice(e.target.value)}
              disabled={uploading}
            />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Precio con oferta del producto: </label>
            <input
              type="text"
              onChange={(e) => setProductPrice(e.target.value)}
              disabled={uploading}
            />
          </div>
          <button
            className="add-product__btn"
            type="button"
            onClick={onSubmitProduct}
          >
            {uploading ? `Cargando... ${progress}%` : "Añadir producto"}
          </button>
        </form>
      </div>
    </section>
  );
}
