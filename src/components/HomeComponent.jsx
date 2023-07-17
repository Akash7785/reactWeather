import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../index";
import { Button } from "@mui/material";

const HomeComponent = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("lucknow");
  const [typedCity, setTypedCity] = useState("");

  const setTypedSearch = () => {
    setSearch(typedCity);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}`
      );
      setCity(data);

      console.log(data);
    };
    fetchdata();
  }, [search]);
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Enter City Name"
          onChange={(event) => setTypedCity(event.target.value)}
        />
        <Button onClick={setTypedSearch}>Search</Button>
        <h1>{typedCity}</h1>
      </div>
      {!city ? (
        <p>city not found</p>
      ) : (
        <>
          <div>
            <h2>{search}</h2>
            <h1>{city.main.temp}</h1>
          </div>
        </>
      )}
    </>
  );
};

export default HomeComponent;
