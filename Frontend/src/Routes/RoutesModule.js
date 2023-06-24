import React from 'react'
import{Routes,Route}from "react-router-dom"
import Counting from "../components/Counting"
import Useeffect from "../components/Useeffect"
import BMIcalc from '../components/BMIcalc'
import PagenotFound from '../components/PagenotFound/PagenotFound'
import Weather from '../components/Weather'
import SpaceX from '../components/SpaceX/SpaceX'

const RoutesModule = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Counting />}/>
        <Route path="useeffect" element={<Useeffect />}/>
        <Route path="bmicalc" element={<BMIcalc />}/>
        <Route path="weather" element={<Weather />}/>
        <Route path="spacex" element={<SpaceX />}/>
        <Route path="*" element={<PagenotFound />}/>
     </Routes>
    </>
  )
}

export default RoutesModule
