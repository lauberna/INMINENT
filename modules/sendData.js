import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { showSection } from "./primary/body.js";
import { db } from "../config/firebaseConfig.js";

const enviarDatos = async (obj) => {
  await addDoc(collection(db, "Consultas"), {
    Name: obj.nombre,
    Mail: obj.mail,
    Tel: obj.telefono,
    Mensaje: obj.mensaje,
  })
    .then((res) => {
      console.log("datos enviados correctamente, id: ", res.id);
      showSection("section-0");
      Swal.fire(
        "enviado!",
        `Datos enviados correctamente con id: ${res.id} `,
        "success"
      );
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: "algo salio mal",
        icon: "error",
        confirmButtonText: "Cool",
      });
    });
};

export default enviarDatos;
