import { useState } from 'react';
import React, {useEffect}from 'react'
import Button from '../Shared/Button';

const Useeffect = () => {
    const [counter,setCounter] = useState(0);
    const addHandler = () => {
        console.log("add");
        setCounter(counter + 1);
        console.log(counter);
      };
    
      const subHandler = () => {
        setCounter(counter - 1);
        console.log(counter);
      };
      useEffect(() => {
        console.log("use effect called", { counter });
      }, [counter]);
  return (
    <div>
    <div className="flex justify-center ">
        <Button buttonname="add" className="my-5" onClick={addHandler} />
      </div>
    <p className='text-6xl text-center'>{counter}</p>
    <div className="flex justify-center ">
        <Button buttonname="sub" className="my-5" onClick={subHandler} />
      </div>
    </div>
  )
}

export default Useeffect
