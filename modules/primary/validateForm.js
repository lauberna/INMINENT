import enviarDatos from "../sendData.js";
let inpName = document.getElementById("inpName");
let inpMail = document.getElementById("inpMail");
let inpTel = document.getElementById("inpTel");
let inpMsj = document.getElementById("inpMsj");
let send = document.getElementById("enviar");
let form = document.getElementById("formC");
let labels1 = document.getElementById("label1")
let labels2 = document.getElementById("label2")
let labels3 = document.getElementById("label3")
let labels4 = document.getElementById("label4")




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
      
      if(inpName.classList.contains("err")){
        labels1.classList.add("labelErr")
        labels1.style.color = "red"
      }
      if(inpMail.classList.contains("err")){
        labels2.classList.add("labelErr")
        labels2.style.color = "red"
      }
      if(inpTel.classList.contains("err")){
        labels3.classList.add("labelErr")
        labels3.style.color = "red"
      }
      if(inpMsj.classList.contains("err")){
        labels4.classList.add("labelErr")
        labels4.style.color = "red"
      }
      setTimeout(() => {
        labels1.style.color = "white"
        labels2.style.color = "white"
        labels3.style.color = "white"
        labels4.style.color = "white"
      }, 400);
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
