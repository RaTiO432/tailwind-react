import { weatherkey,weatherurl } from "../../Config/Weatherconfig";
import axios, { Axios } from "axios";
export const getWeatherDetails = async(CityName) =>{
try {
     const url = weatherurl+`current.json?key= ${weatherkey}&q=${CityName}&aqi=no`
    const WeatherData = await axios.get(url);
    console.log(WeatherData);
    return WeatherData;
} catch (error) {
    console.error(error.message)
    return error;
}
   
};
