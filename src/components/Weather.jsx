import React, { useState } from "react";
import { getWeatherDetails } from "../Shared/API/WeatherApi";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import moment from "moment/moment";
import Loader from "../components/Loader/Loader"
const Weather = () => {

  const getWeatherHandler = async () => {
   const weatherDetails = await getWeatherDetails(cityName);
   const weatherData = (await weatherDetails.data||[]);
   console.log(weatherData?.location);


   setCity(weatherData?.location?.name);
   setRegion(weatherData?.location?.region);
   const CustomTime = moment.unix(weatherData?.location?.localtime_epoch).format("dddd,MMMM Do, YYYY h:mm:ss A")
   setTime(CustomTime);
   setCountry(weatherData?.location?.country);
   setLoader(false);
  };


  const[loader,setLoader] = useState(true);
  const[city,setCity]= useState("")
  const[region,setRegion]= useState("")
  const[time,setTime]= useState("")
  const[country,setCountry]= useState("")
  const[cityName,setCityName] = useState("");
  const cityNameHandler = (event)=>{
    setCityName(event.target.value);
  }


  return (
    <div>
    
      <div className="flex justify-center items-center">
        <Input placeholder="Enter City Name" onChange={cityNameHandler}></Input>
      </div>
      <div className="flex justify-around items-center my-10 ">
        {loader? <Loader/> :
        <div className="border rounded-lg my-10  mx-5 py-8 px-5">
        <div>City: {city}</div>
        <div>Region: {region}</div>
        <div>Time: {time}</div>
        <div>Country: {country}</div>
        </div>}
        
      </div>
      <div className="flex justify-center items-center ">
        <Button
          buttonname="Get Weather"
          onClick={getWeatherHandler}
          className="my-5"
        ></Button>
      </div>
    </div>
  );
};

export default Weather;
