import React from 'react'
import{Routes,Route}from "react-router-dom"
import Counting from "../components/Counting"
import Useeffect from "../components/Useeffect"
import BMIcalc from '../components/BMIcalc'
import PagenotFound from '../components/PagenotFound/PagenotFound'
import Weather from '../components/Weather'
import SpaceX from '../components/SpaceX/SpaceX'
import Rocket from '../components/SpaceX/Rocket/Rocket'

const RoutesModule = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Counting />}/>
        <Route path="useeffect" element={<Useeffect />}/>
        <Route path="bmicalc" element={<BMIcalc />}/>
        <Route path="weather" element={<Weather />}/>
        <Route path="spacex" element={<SpaceX />}/>
        <Route path="rocket/:id" element={<Rocket />}/>S
        <Route path="*" element={<PagenotFound />}/>
     </Routes>
    </>
  )
}

export default RoutesModule
