import {RxCounterClockwiseClock} from "react-icons/rx"
import {DiReact} from "react-icons/di"
import {BiBody} from "react-icons/bi"
import {TiWeatherCloudy} from "react-icons/ti"
export const navbar =[
    {
        route:"/",
        name: "counter",
        icons: <RxCounterClockwiseClock/>,
    },
    {
        route:"/useeffect",
        name: "Useeffect",
        icons: <DiReact/>,
    },
    {
        route:"/bmicalc",
        name: "BMI Calculator",
        icons: <BiBody/>,
    },
    {
        route:"/weather",
        name: "Weather Application",
        icons: <TiWeatherCloudy/>,
    },
    
]