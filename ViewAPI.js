import React, { useState, useEffect } from'react';
import axios from 'axios';
import './styles.css';

export default function App () {
  const [tempera, setTempera] = useState(30);
  const [lugar, setLugar] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [formulario, setFormulario] = useState(false);

  function handleSubmit(e) {
    setFormulario(true);
    e.preventDefault();
    CallWeather();
  }
  function CallWeather () {
    var config = {
      method: 'get',
      url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
      params: {'lon': (longitude), 'lat': (latitude)},
      headers: { 
        'x-rapidapi-key': '14a4219aefmsh59755388b9ce369p113991jsn9739eb9bdbbf', 
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    }
      
    axios(config)
    .then(function (response) {
      console.log(response.data)
      setLugar(response.data.data[0].city_name)
      setTempera(response.data.data[0].temp)
    })
    .catch(function (error) {
      console.log(error)
    })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Latitude: 
          <input type='number' value={latitude} onChange={e => setLatitude(e.target.value)}/>
        </label>
        <label> Longitude: 
          <input type='number' value={longitude} onChange={f => setLongitude(f.target.value)}/>
        </label>
        <input type='submit' value='Pesquisar' />
      </form>
      <br/>
      <div>
        {
          formulario ? <div> A temperatura é de {tempera}ºC em {lugar}. </div> : null
        }
      </div>
      
    </div>
  )
    
}



/* <button onClick={botao}>BOTÃO</button><input type='submit' value='Pesquisar' /> */