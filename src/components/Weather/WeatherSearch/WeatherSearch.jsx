import React from 'react'
import Input from '../../../Shared/Input'
import Button from '../../../Shared/Button'
const WeatherSearch = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Input
          placeholder="Enter City Name"
          className="input-primary w-50rem"
          onChange={props.cityNameHandler}
          value={props.cityName}
        ></Input>
        <Button buttonname="submit" onClick={props.getCurrentWeatherHandler} />
      </div>
    </div>
  )
}

export default WeatherSearch
