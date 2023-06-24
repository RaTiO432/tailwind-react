import {localURL} from "../../Config/Weatherconfig";
import axios from "axios";
export const getWeatherDetails = async(CityName) =>{
try {
     const url = localURL+`currentweather?city=${CityName}&aqi=no`
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
         const url = localURL+`forecastweather?city=${CityName}&days=1&aqi=no&alerts=no`
        const WeatherData = await axios.get(url);
        console.log(WeatherData);
        return WeatherData;
    } catch (error) {
        console.error(error.message)
        return error;
    }
       
    };
    export const getRockets = async() =>{
        try {
             const url = localURL+`rockets/rockets`
            const WeatherFetch = await fetch(url);
            const WeatherData = await WeatherFetch.json();
            return WeatherData;
        } catch (error) {
            console.error(error.message)
            return error;
        }
           
        };
    