import React, { useState, useEffect } from "react";
import axios from 'axios';

const Misreservas = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/misreservas?id_cliente=24', {
      headers: {
        'Authorization': `Bearer tYdhiEl4bNaDUGyFLDqgGkfSbSuoXWYUkdvkMSi2`
      },
    })
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8080/api/misreservas?id=${id}', {
      headers: {
        'Authorization': `Bearer tYdhiEl4bNaDUGyFLDqgGkfSbSuoXWYUkdvkMSi2`
      },
    })
      .then(response => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch(error => console.log(error));
}
  return (
    <div>Mis reservas</div>
  )
}

export default Misreservas