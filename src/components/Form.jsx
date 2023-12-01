/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Form = ({isDark}) => {
    
    const refForm = useRef();
    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");
    // const [mensaje, setMensaje] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        const serviceID = "service_znhnesn";
        const templateID = "template_o5jqhwg";
        const apikey = "6OD2bAOrMsCgc0ukQ";

        emailjs.sendForm(serviceID, templateID, refForm.current ,apikey)
        .then(result => Swal.fire({
            icon: "success",
            text: "Email enviado con exito!",
            timer: 2000
            }))
        .catch(error => console.log(error));
        
    }
  return (
    <>
        <form ref={refForm} action="" className="formulario" onSubmit={handleForm}>
            <label htmlFor="">Nombre</label>
            <input data-theme={isDark ? "input-dark" : ""} name="username" type="text"  required/>
            <label htmlFor="">Correo electrónico</label>
            <input data-theme={isDark ? "input-dark" : ""} name="email" type="email"  required/>
            <label htmlFor="">Mensaje</label>
            <textarea  data-theme={isDark ? "input-dark" : ""} name="message" id="" cols="30" rows="10" required></textarea>
            <div className="btn-container">
            <button type="submit" data-theme={isDark ? "btn-dark" : ""} >ENVIAR</button>
            </div>
        </form>
    </>
  )
}

export default Form