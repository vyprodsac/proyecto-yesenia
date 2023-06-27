import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/config";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  // uploadBytesResumable,
} from "firebase/storage";
export default function AddProduct() {
  // Referencia a la colección "productos" en Firestore
  const dataCollectionProductoRef = collection(db, "productos");

  // Estados para almacenar los valores del campo de fomulario
  const [categoria, setCategoria] = useState("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);

  //Estados relacionados con la carga de archivos
  // const [uploading, setUploading] = useState(false);
  // const [progress, setProgress] = useState(0);

  // Funcion para el manejo de envio de datos de formulario
  const onSubmitProduct = async () => {
    // Validar que los campos no esten vacios
    if (categoria === "" || nombre === "" || precio === "" || imagen === null) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Verificar el tamaño del archivo
    if (imagen.size > 8 * 1024 * 1024) {
      alert("El tamaño del archivo debe ser menor a 8MB");
      return;
    }

    try {
      // Referencia única para el archivo a subir
      const imgRef = ref(storage, `productos/${imagen.name}`);

      //Crear una tarea de carga de archivos resumible
      // const uploadTask = uploadBytesResumable(imgRef, imagen);

      //Subir el archivo y obtener su URL de descarga 
      await uploadBytes(imgRef, imagen);
      const imgUrl = await getDownloadURL(imgRef);

      //Agregar los datos a Firestore | colección "productos"
      await addDoc(dataCollectionProductoRef, {
        categoria: categoria,
        name: nombre,
        precio: precio,
        img: imgUrl,
        id: crypto.randomUUID(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="add-product">
      <div className="add-product__container container">
        <h1>Añadir productos</h1>
        <form action="" className="add-product__form">
          <div className="add-product__form-group">
            <label htmlFor="">Categoria: </label>
            <input type="text" onChange={(e) => setCategoria(e.target.value)} />
          </div>
          {/* Agregar id por generador uuid */}
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
            <label htmlFor="">Nombre producto:</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="add-product__form-group">
            <label htmlFor="">Precio producto:</label>
            <input type="text" onChange={(e) => setPrecio(e.target.value)} />
          </div>
          <button
            className="add-product__btn"
            type="button"
            onClick={onSubmitProduct}
          >
            Añadir producto
          </button>
        </form>
      </div>
    </section>
  );
}
