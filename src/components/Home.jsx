import React, { useEffect, useState } from "react";
import "../styles/home.css";
import axios from "axios";
import { key } from "../index";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../styles/homecomponent.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Home = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("lucknow");
  const [typedCity, setTypedCity] = useState("");
  const setTypedSearch = () => {
    setSearch(typedCity);
  };

  useEffect(() => {
    try {
      const fetchedData = async () => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric
          `
        );
        console.log(data);
        setCity(data);
      };
      fetchedData();
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  return (
    <>
      {!city ? (
        <p>"NO DATA FOUND"</p>
      ) : (
        <>
          <div className="bgcontainer">
            <div className="mainContainer">
              <div className="leftContainer">
                <div className="cityname">
                  <h1>{city.name}</h1>
                  <p>{city.sys.country}</p>
                </div>
                <div className="dateTImeBottom">
                  <div className="temprature">
                    <h1>
                      {city.main.temp}
                      <span>°C</span>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="rightContainer">
                  <div className="logo">
                    <CloudQueueIcon sx={{ fontSize: 90 }} color="white" />
                  </div>
                  <h1 style={{ textAlign: "center", color: "white" }}>
                    {city.weather[0].main}
                  </h1>
                  <div className="input">
                    <TextField
                      id="standard-basic"
                      label="Search any City"
                      variant="standard"
                      onChange={(event) => setTypedCity(event.target.value)}
                    />
                    <Button onClick={setTypedSearch}>Search</Button>
                  </div>
                  <div className="cityName">
                    <p>{city.name}</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <DeviceThermostatIcon />
                      <p>Temperature</p>
                    </div>
                    <p>{city.main.temp}°C</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <WaterDropIcon />
                      <p>Humidity</p>
                    </div>
                    <p>{city.main.humidity}</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <VisibilityIcon />
                      <p>Visibility</p>
                    </div>
                    <p>{city.visibility}</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <AirIcon />
                      <p>wind Speed</p>
                    </div>
                    <p>{city.wind.speed}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
