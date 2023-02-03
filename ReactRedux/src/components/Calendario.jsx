import React, { useState, useEffect } from "react";
import FullCalendar from "fullcalendar-reactwrapper";
import axios from 'axios';
import Reserva  from '../Reserva';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";

const Calendario = () => {
  const [events, setEvents] = useState([]);
  const [horas, setHoras] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/horarios", {
      headers: {
        'Authorization': `Bearer btpfqsYr6jKww2R4w6d55opxbomp7fy0LUgHzw6V`
      }
    })
      .then(response => {
        const horarios = response.data.data;
        const eventos = horarios.map(horario => ({
          start: horario.fecha,
          title: "",
          allDay: true
        }));
        setEvents(eventos);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

const handleEventClick = (event) => {
  const start = event.start.toISOString().split("T")[0];

    axios
      .post("http://localhost:8080/api/horas", {
        fecha: start
      })
      .then(response => {
        const horarios = response.data.data;
   
        if (horarios.length >= 0) {
          const hora = horarios[0].hora;
          setHoras([]);
          setHoras(prevHoras => [...prevHoras, ...horarios.map(horario => horario.hora)]);
          
        }
      })
      .catch(error => console.error(error));

    };

  return (
    <div>
    <FullCalendar
      id="full_calendar_events"
      header={{
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listWeek",
      }}
      editable={true}
      events={events}
      displayEventTime={true}
      eventRender={(event, element) => {
        event.allDay = "true";
      }}
      selectable={true}
      selectHelper={true}
      locale="es"
      

      eventClick={handleEventClick}


    />

<div>
    {horas.map((hora, index) => (
      <div key={index}>{hora}</div>
    ))}
  </div>
  </div>
  )
}

export default Calendario
