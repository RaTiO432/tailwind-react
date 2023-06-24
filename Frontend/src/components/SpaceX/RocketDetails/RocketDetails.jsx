import React, { useEffect, useState } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
const RocketDetails = ({
  id,
  desc = "",
  company = "",
  country = "",
  flickrImages = [],
  rocketName = "",
  rocketId = "",
  rocketType = "",
  wiki = "",
  mass = { kg: 0, lb: 0 },
  active = false,
  firstFlight = "",
}) => {
  const [customActiveClass,setCustomActiveClass] = useState("");
  const setActiveClass=()=>{
    if(active){
      setCustomActiveClass("bg-lightgreen ");
    }
    else{
      setCustomActiveClass("bg-orange ");
    }
  };
  useEffect(()=>{
    setActiveClass();
  });
  return (
    <div>
      
      <div className="grid grid-cols-1 gap-4 my-1rem" id="grid">
        <div className={"card w-40rem shadow-lg " + customActiveClass}>
          <figure>
            <img src={flickrImages[0]} alt="rockets" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {rocketId}:- {rocketName}
            </h2>
            <p>{desc}</p>
            <div tabIndex={id} className="collapse ">
              <div className="collapse-title text-xl font-medium flex justify-end items-center">
                More...
              </div>
              <div className="collapse-content">
                <p>
                  Company:- {company} 
                </p>
                <p>
                  Country:- {country} 
                </p>
                <p>
                  Rocket Type:- {rocketType} 
                </p>
                
                <p>mass:- {mass.kg} kg</p>
                <p>active:- {"" + active}</p>
                <p>First flight:- {firstFlight}</p>
              </div>
            </div>
            <div className="card-actions justify-stretch w-100%">
           <div className="flex justify-between items-center space-x-3 w-100%">
           <p><a href={wiki} target="_blank" rel="noreferrer">{wiki}</a></p>
              <button className="btn btn-primary">
                <BsRocketTakeoff />
              </button>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketDetails;
