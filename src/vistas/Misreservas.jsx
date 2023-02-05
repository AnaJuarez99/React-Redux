import React, { useState, useEffect } from "react";
import axios from 'axios';


const Misreservas = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/misreservas?id_cliente=38', {
      headers: {
        'Authorization': 'Bearer tYdhiEl4bNaDUGyFLDqgGkfSbSuoXWYUkdvkMSi2'
      },
    })
      .then(response => setData(response.data.Data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/misreservas?id=${id}`, {
      headers: {
        'Authorization': 'Bearer tYdhiEl4bNaDUGyFLDqgGkfSbSuoXWYUkdvkMSi2'
      },
    })
      .then(response => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
}
  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Id Cliente</th>
            <th>Id Menu</th>
            <th>Id Mesa</th>
            <th>Fecha Reserva</th>
            <th>Nº Tarjeta</th>
            <th>Nº Personas</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.id_cliente}</td>
                <td>{item.id_menu}</td>
                <td>{item.id_mesa}</td>
                <td>{item.fecha_reserva}</td>
                <td>{item.num_tarjeta}</td>
                <td>{item.num_personas}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Cancelar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
</div>
  )
}

export default Misreservas