import React, { useState, useEffect } from "react";
import axios from 'axios';
import Misreservas from './Misreservas';
import './form.css';

const Form = () => {
    const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClick2 = () => {
   // setShowForm(!showForm);
   window.location = "/Misreservas/"
  };

  function handleSubmit(event) {
    event.preventDefault();
  
    const id_cliente = event.target.elements.id_cliente.value;
    const id_menu = event.target.elements.id_menu.value;
    const id_mesa = event.target.elements.id_mesa.value;
    const fecha_reserva = event.target.elements.fecha_reserva.value;
    const num_tarjeta = event.target.elements.num_tarjeta.value;
    const num_personas = event.target.elements.num_personas.value;


  
    axios.post('http://localhost:8080/api/misreservas', {
    id_cliente,
    id_menu,
    id_mesa,
    fecha_reserva,
    num_tarjeta,
    num_personas
}, {
      headers: {
        'Authorization': 'Bearer tYdhiEl4bNaDUGyFLDqgGkfSbSuoXWYUkdvkMSi2'
      },
    })
      .then(function (response) {
        console.log(response);
        setSuccess('Se ha realizado correctamente');
        handleClick2();
      })
      .catch(function (error) {
        console.log(error);
        setError('ERROR');
        });
        }
  return (
    <div>
      { error && <h1>{error}</h1> }
      { success && <h1>{success}</h1> }
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name"><b>Id del Cliente:</b></label>
        <input type="text" className="form-control" id="id_cliente"/>
      </div>

      <div className="form-group">
        <label htmlFor="name"><b>Id del Menu:</b></label>
        <input type="text" className="form-control" id="id_menu"/>
      </div>

      <div className="form-group">
        <label htmlFor="subject"><b>Id de Mesa:</b></label>
        <input type="text" className="form-control" id="id_mesa"/>
      </div>

      <div className="form-group">
        <label htmlFor="message"><b>Fecha de Reserva:</b></label>
        <textarea className="form-control" id="fecha_reserva"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="numTarjeta"><b>Numero de Tarjeta:</b></label>
        <textarea className="form-control" id="num_tarjeta"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="numPersonas"><b>Numero de Personas:</b></label>
        <textarea className="form-control" id="num_personas"></textarea>
      </div>
      <button type="submit"  className="btn btn-primary">Enviar</button>
    </form>

    {showForm && <Misreservas />}
</div>
  )
}

export default Form