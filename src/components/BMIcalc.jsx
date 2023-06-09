import { useState } from "react";
import React from "react";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
const BMIcalc = () => {

    const [name,setName] = useState("");
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [bmi,setBmi] = useState("");
    const [category,setCategory] = useState("");
    const nameHandler=(event)=>{
        setName(event.target.value);
    }
    const weightHandler=(event)=>{
        setWeight(event.target.value);
    }
    const heightHandler=(event)=>{
        setHeight(event.target.value);
    }

    const calBmi=()=>{
        if(height && weight)
        {
        const temp = (weight / (height * height) * 10000).toFixed(2);
        setBmi(temp);
        setName("");
        setHeight("");
        setWeight("");
        if (temp < 18.5) {
            setCategory(<span>Your category is:- <span className="text-yellow">Underweight</span></span>);
        }
        else if(temp>=18.5 && temp<24.9){
            setCategory(<span>Your category is:- <span className="text-green">Normal</span></span>);
        }
        else if(temp>=25 && temp<29.9){
            setCategory(<span>Your category is:-<span className="text-orange">Overweight</span> </span>);
        }
        else{
            setCategory(<span>Your category is:-<span className="text-red">Obese</span></span>);
        }
        }
        
    }
    const clearHandler=()=>
    {
        setHeight("");
        setName("");
        setWeight("");
    }
    const BMImessage=(
        <span>Your BMI is: {bmi}</span>
    )
    const noBMImessage=(
        <span>Enter height and weight</span>
    )
    
   
    return (
        <div>
            <div className="text-center text-6xl bg-indigo-950 text-white p-2 border-b-8 border-b-yellow">
                <span className="font-slackside">BMI CALCULATOR</span>
            </div>
            
                <div className="border-2 border-solid border-black mx-80 my-5 p-10">
                    <div className="flex justify-center align-items-center">
                        <Input type="textbox" value={name} placeholder="Enter Name" label="Name" onChange={(event)=>(nameHandler(event))}></Input>
                    </div>
                    <div className="flex justify-center align-items-center w-full">
                        <Input type="textbox"  value={height} placeholder="Enter Height(cms)" label="Height" onChange={(event)=>(heightHandler(event))}></Input>
                    </div>
                  
                    <div className="flex justify-center align-items-center">
                        <Input type="textbox" value={weight} placeholder="Enter Weight(kgs)" label="Weight" onChange={(event)=>(weightHandler(event))}></Input>
                    </div>
                 
                    <div className="mt-6 flex justify-center align-items-center">
                        <Button buttonname="Calculate BMI" onClick={calBmi} className="mr-3"></Button>
                        <Button buttonname="Clear" onClick={clearHandler}></Button>
                    </div>
                    <div className="mt-6 flex justify-center align-items-center text-3xl font-slackside">
                        {bmi ? BMImessage: noBMImessage}
                     
                    </div>
                       <div className="mt-6 flex justify-center align-items-center text-3xl font-semibold">{category}</div> 
                </div>



        </div>
    );
};

export default BMIcalc;
