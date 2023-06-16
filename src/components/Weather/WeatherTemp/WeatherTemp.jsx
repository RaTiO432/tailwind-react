import React from 'react'

const WeatherTemp = ({toggleClass,toggleTemperatureHandler}) => {
  return (
    <div>
      <div
          className="flex justify-end items-center
      my-10px;
      md:mx-24rem;
      md:w-64rem;
       "
        >
          <button
            className={
              toggleClass
                ? "btn btn-error rounded-none mx-10px"
                : "btn rounded-none mx-10px"
            }
            onClick={() => toggleTemperatureHandler("f")}
          >
            &deg; F
          </button>
          <button
            className={
              toggleClass
                ? "btn rounded-none mx-10px"
                : "btn btn-success rounded-none mx-10px"
            }
            onClick={() => toggleTemperatureHandler("c")}
          >
            &deg; C
          </button>
        </div>
    </div>
  )
}

export default WeatherTemp
