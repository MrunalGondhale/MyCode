import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=dbd3b02d8958d62185d02e944cd5f522`;
  const Search = () => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    setLocation("");
  };
  return (
    <div className="App">
      <div className="heading">
        <h1>My Weather App</h1>
      </div>
      <div className="container">
        <div className="inputs">
          <input
            type="text"
            value={location}
            placeholder="Enter City"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={Search}>Check</button>
        </div>
        <div className="Details">
          <h2>{data.name}</h2>
          <div className="contents">
            {data.main ? <h5>{data.main.temp}F</h5> : null}
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
