import React, { useState, useEffect } from "react";
import {
  getWeatherDetails,
  getWeatherDayForecast,
} from "../Shared/API/WeatherApi";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import moment from "moment/moment";
import Loader from "./Loader/Loader";
import WeatherDetailsBox from "./Weather/WeatherDetailsBox/WeatherDetailsBox";
import WeatherCurrentDetails from "./Weather/WeatherCurrentDetails/WeatherCurrentDetails";
import WeatherSearch from "./Weather/WeatherSearch/WeatherSearch";
import WeatherTemp from "./Weather/WeatherTemp/WeatherTemp";

const Weather = () => {
  const getCurrentWeatherHandler = async () => {
    setLoader(true);
    const weatherDetails = await getWeatherDetails(cityName);
    const weatherForecast = await getWeatherDayForecast(cityName);
    const weatherForeCastData = (await weatherForecast.data) || {};
    const weatherData = (await weatherDetails.data) || [];
    setWeatherDetails({ ...weatherData });
    setWeatherForecastData({ ...weatherForeCastData });
    setLoader(false);
  };

  const [checkTempDegree, setCheckTempDegree] = useState("c");
  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });

  const [weatherForecastData, setWeatherForecastData] = useState({
    location: {},
    forecast: {
      forecastday: [
        {
          hour: [],
        },
      ],
    },
    current: {},
  });
  const [loader, setLoader] = useState(true);
  const [cityName, setCityName] = useState("");
  const [toggleClass, setToggleClass] = useState(false);

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };
  const toggleTemperatureHandler = (temp) => {
    setCheckTempDegree(temp);
    setToggleClass(!toggleClass);
  };

  useEffect(() => {
    console.log(weatherForecastData);
  }, [weatherForecastData]);

  return (
    <>
      {/* Toggle between temperature */}
      {!loader && (
        <WeatherTemp toggleClass={toggleClass} toggleTemperatureHandler={toggleTemperatureHandler}/>
      )}

      {/* search city input */}
      <WeatherSearch
        cityNameHandler={cityNameHandler}
        getCurrentWeatherHandler={getCurrentWeatherHandler}
      />
      {/* weather details box */}
      {!loader && <WeatherDetailsBox location={weatherDetails.location} />}

      {/* weather details box */}
      {!loader && (
        <WeatherCurrentDetails
          current={weatherDetails.current}
          forecast={weatherForecastData.forecast}
          checkTemp={checkTempDegree}
          
        />
      )}
      {loader && (
        <div className="flex justify-center items-center my-5rem">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Weather;
