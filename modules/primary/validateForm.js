import enviarDatos from "../sendData.js";
let inpName = document.getElementById("inpName");
let inpMail = document.getElementById("inpMail");
let inpTel = document.getElementById("inpTel");
let inpMsj = document.getElementById("inpMsj");
let send = document.getElementById("enviar");
let err = document.getElementById("err1");
let form = document.getElementById("formC");
err.style.opacity = "0";

const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\d{9,14}$/;
const regexMsj = /^.{15,100}$/;

export default function validateForm() {
  function validate(input, regex) {
    let inp = document.getElementById(input);
    if (regex.test(inp.value)) {
      inp.classList.remove("err");
      inp.classList.add("pass");
      return true;
    } else {
      inp.classList.remove("pass");
      inp.classList.add("err");
      return false;
    }
  }
  
  function allTrue() {
    let trueName = validate("inpName", regexNombre)
    let trueMail =  validate("inpMail", regexEmail)
    let trueTel = validate("inpTel", regexTelefono)
    let trueMsj = validate("inpMsj", regexMsj)
    if (trueName && trueMail && trueTel && trueMsj) {
      return true;
    }
    return false;
  }

  form.addEventListener("input", allTrue);

  function validarForm() {
    if (allTrue()) {
      let consulta = new Consulta(
        inpName.value,
        inpMail.value,
        inpTel.value,
        inpMsj.value
      );
      enviarDatos(consulta);
      setTimeout(function () {
        inpMail.value = "";
        inpMsj.value = "";
        inpName.value = "";
        inpTel.value = "";
      }, 200);
      return consulta;
    } else {
      err.style.opacity = 1;
      setTimeout(() => {
        err.style.opacity = 0;
      }, 1000);
    }
  }

  class Consulta {
    constructor(nombre, mail, telefono, mensaje) {
      this.nombre = nombre;
      this.mail = mail;
      this.telefono = telefono;
      this.mensaje = mensaje;
    }
  }

  send.addEventListener("click", function (e) {
    e.preventDefault();
    validarForm();
  });
}
