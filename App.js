import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [count, setCount] = useState(0);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=dbd3b02d8958d62185d02e944cd5f522`;
  // const Search = () => {
  //   axios.get(url).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  //   setLocation("");
  // };
  const increment = () => {
    setCount(count + 1);
  };

  async function Search(req, res) {
    try {
      await axios.get(url).then((res) => {
        setData(res.data);
        //console.log(res.data);
      });
    } catch (error) {
      console.error("-----");
      alert("NOT Found");
    }
    setLocation("");
  }

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
          <p>{count}</p>
          <button onClick={increment}>Counter</button>
          <h2>{data.name}</h2>
          <div className="contents">
            {data.main ? <h5>{data.main.temp}F</h5> : null}
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
