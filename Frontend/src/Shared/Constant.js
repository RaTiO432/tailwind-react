import {RxCounterClockwiseClock} from "react-icons/rx"
import {DiReact} from "react-icons/di"
import {BiBody} from "react-icons/bi"
import {TiWeatherCloudy} from "react-icons/ti"
import {BsRocket} from "react-icons/bs"
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
    {
        route:"/spacex",
        name: "spacex",
        icons: <BsRocket/>,
    },
    
]