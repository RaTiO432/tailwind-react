import React from 'react'
import{Routes,Route}from "react-router-dom"
import Counting from "../components/Counting"
import Useeffect from "../components/Useeffect"
import BMIcalc from '../components/BMIcalc'
import PagenotFound from '../components/PagenotFound/PagenotFound'

const RoutesModule = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Counting />}/>
        <Route path="useeffect" element={<Useeffect />}/>
        <Route path="bmicalc" element={<BMIcalc />}/>
        <Route path="*" element={<PagenotFound />}/>
     </Routes>
    </>
  )
}

export default RoutesModule
