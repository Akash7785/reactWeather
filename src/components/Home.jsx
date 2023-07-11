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

// const cityName = "lucknow";

const Home = () => {
  const [search, setSearch] = useState("lucknow");
  const [city, setCity] = useState(null);
  console.log(search);

  useEffect(() => {
    try {
      const fetchedData = async () => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
        );
        console.log(data);
        setCity(data.main);
      };
      // console.log("city", city);
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
                  <h1>Lucknow</h1>
                  <p>IN</p>
                </div>
                <div className="dateTImeBottom">
                  <div className="date">
                    <h3>01:59:01</h3>
                    <p>Mondty, 19 May 2023</p>
                  </div>
                  <div className="temprature">
                    <h1>
                      45<span>°</span>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="rightContainer">
                  <div className="logo">
                    <CloudQueueIcon sx={{ fontSize: 90 }} color="white" />
                  </div>
                  <h1 style={{ textAlign: "center", color: "white" }}>Haze</h1>
                  <div className="input">
                    <TextField
                      id="standard-basic"
                      label="Search any City"
                      variant="standard"
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </div>
                  <div className="cityName">
                    <p>{city.name}</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <DeviceThermostatIcon />
                      <p>Temperature</p>
                    </div>
                    <p>{city.temp}</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <WaterDropIcon />
                      <p>Humidity</p>
                    </div>
                    <p>32</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <VisibilityIcon />
                      <p>Visibility</p>
                    </div>
                    <p>32C</p>
                  </div>
                  <div className="data">
                    <div className="icon">
                      <AirIcon />
                      <p>wind Speed</p>
                    </div>
                    <p>32C</p>
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
