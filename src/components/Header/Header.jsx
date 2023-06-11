import React, { Suspense ,lazy } from 'react'
import Loader from '../Loader/Loader'
const Header = () => {
    const Navbar = lazy(() => import("../Navbar/Navbar"));
  return (
    <div>
    <Suspense fallback={<Loader classname="flex justify-center"/>}>
        <Navbar/>
    </Suspense>
   
    </div>
  )
}

export default Header
