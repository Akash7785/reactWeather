import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../index";

const HomeComponent = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

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
      {!city ? (
        "city not found"
      ) : (
        <>
          <div>
            <input
              type="text"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <h1>{city.main.temp}</h1>
          </div>
        </>
      )}
    </>
  );
};

export default HomeComponent;
