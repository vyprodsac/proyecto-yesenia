/****************
 * CODIGO DOCUMENTADO
 * ****************/
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { db, storage } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

/**
 * Componente para reportar un vendedor.
 */
export default function Report() {
  // Referencia a la colección "reportes" en Firestore
  const dataCollectionRef = collection(db, "reportes");

  // Estados para almacenar los valores de los campos del formulario
  const [newNameSeller, setNewNameSeller] = useState("");
  const [newNameProduct, setNewNameProduct] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [fileUpload, setFileUpload] = useState(null);

  // Estados relacionados con la carga de archivos
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  /**
   * Maneja el evento de envío de datos del formulario.
   */
  const onSubmitData = async () => {
    const MySwal = withReactContent(Swal);
    // Verificar el tamaño del archivo

    // Validar que todos los campos del formulario estén completos
    if (
      newDescription === "" ||
      newNameProduct === "" ||
      newNameSeller === "" ||
      fileUpload === null
    ) {
      return MySwal.fire({
        title: <p>Completar formulario</p>,
        position: "center",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    if (fileUpload.size > 8 * 1024 * 1024) {
      MySwal.fire({
        title: <p>El tamaño del archivo supera el límite de 8MB</p>,
        position: "center",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
      });
      return; // Detener el proceso de carga
    }
    try {
      setUploading(true); // Deshabilitar el formulario y el botón de envío

      // Generar una referencia única para el archivo
      const fileRef = ref(storage, `/${crypto.randomUUID() + fileUpload.name}`);

      // Crear una tarea de carga de archivos resumible
      const uploadTask = uploadBytesResumable(fileRef, fileUpload);

      // Obtener el progreso de la subida del archivo
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          setProgress(progress); // Actualizar el progreso de carga en cada interacción
        },
        (error) => {
          console.log(error);
        }
      );

      // Subir el archivo y obtener su URL de descarga
      await uploadBytes(fileRef, fileUpload);
      const downloadURL = await getDownloadURL(fileRef);

      // Agregar los datos del reporte a Firestore
      await addDoc(dataCollectionRef, {
        vendedor: newNameSeller,
        producto: newNameProduct,
        descripcionReporte: newDescription,
        imgUrl: downloadURL,
      });

      // Mostrar un mensaje de éxito
      MySwal.fire({
        title: <p>Vendedor Reportado</p>,
        position: "center",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false); // Habilitar el formulario y el botón de envío
      setProgress(0); // Reiniciar el progreso de carga
    }
  };

  return (
    <section className="report">
      <div className="report__container container">
        <h2 className="report__title">|| Repotar vendedor</h2>
        <form action="" className="report__form">
          <div className="report__form-group">
            <label htmlFor="">Ingrese el nombre del vendedor</label>
            <input
              type="text"
              onChange={(e) => setNewNameSeller(e.target.value)}
              value={newNameSeller}
              disabled={uploading} // Deshabilitar el campo mientras se carga
            />
          </div>
          <div className="report__form-group">
            <label htmlFor="">Ingrese el nombre del producto/os</label>
            <input
              type="text"
              onChange={(e) => setNewNameProduct(e.target.value)}
              value={newNameProduct}
              disabled={uploading} // Deshabilitar el campo mientras se carga
            />
          </div>
          <div className="report__form-group">
            <label htmlFor="">
              Ingrese la descripción de la situación a reportar
            </label>
            <textarea
              type="text"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              disabled={uploading} // Deshabilitar el campo mientras se carga
            />
          </div>
          <div className="report__form-group">
            <label htmlFor="">Imagen de la situación a reportar</label>
            <input
              type="file"
              name=""
              accept="image/jpeg, image/jpg, image/png"
              id=""
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFileUpload(e.target.files[0]);
                }
              }}
              disabled={uploading} // Deshabilitar el campo mientras se carga
            />
          </div>

          <button
            type="button"
            className="report__btn"
            onClick={onSubmitData}
            disabled={uploading} // Deshabilitar el botón mientras se carga
          >
            {uploading ? `Cargando... ${progress}%` : "Enviar reporte"}
          </button>
        </form>
      </div>
    </section>
  );
}
