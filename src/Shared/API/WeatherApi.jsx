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

export const getWeatherDayForecast = async(CityName) =>{
    try {
         const url = weatherurl+`forecast.json?key=${weatherkey}&q=${CityName}&days=1&aqi=no&alerts=no`
        const WeatherData = await axios.get(url);
        console.log(WeatherData);
        return WeatherData;
    } catch (error) {
        console.error(error.message)
        return error;
    }
       
    };
    