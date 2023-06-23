import React from 'react'
import moment from 'moment'
const WeatherCurrentDetails = ({current,forecast,checkTemp}) => {
  return (
    <div>
      <div
        className="bg-weather
      h-300vh
       bg-no-repeat bg-center bg-cover
        sm:mx-1rem
        md:mx-5rem
        lg:mx-15rem
        sm:py-5
       md:py-5
       md:px-10
       my-5
       rounded-lg
       text-white
       "
      >
        <div className="flex justify-around align-top">
          <div className="flex justify-center items-center flex-row-reverse">
            <p>{current.condition.text}</p>
            <figure>
              <img
                height={100}
                width={100}
                src={"https:" + current.condition.icon}
                alt="weatherimage"
              />
            </figure>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <p>Wind: {current.wind_kph} kmph</p>
            <p>Precip: {current.precip_in} in</p>
            <p>Pressure: {current.pressure_in} in</p>
            <p>Humidity: {current.humidity}</p>
            <p className="text-3xl ">
              {checkTemp === "c" && (
                <span>{current.temp_c} &deg;C</span>
              )}{" "}
              {checkTemp === "f" && (
                <span>{current.temp_f} &deg;F</span>
              )}{" "}
            </p>
          </div>
        </div>
        <div className="font-black grid grid-cols-6 gap-4 my-5rem">
          {forecast.forecastday[0].hour.map((ele)=>(
            <>
            <p>{moment.unix(ele.time_epoch).format("dddd, MMMM Do, YYYY H:MM:SS A")}</p>
            <p>
            {checkTemp === "c" && (
                <span>{ele.temp_c} &deg;C</span>
              )}{" "}
              {checkTemp === "f" && (
                <span>{ele.temp_f} &deg;F</span>
              )}{" "}
            </p>
            
            <figure>
            {ele.condition.text}
              <img src={"https:"+ ele.condition.icon} alt="noimgfound"></img>
            </figure>
            </>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default WeatherCurrentDetails
