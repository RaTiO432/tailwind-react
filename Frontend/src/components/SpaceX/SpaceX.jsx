import React, { useEffect, useState } from "react";
import { getRockets } from "../../Shared/API/WeatherApi";
import RocketDetails from "./RocketDetails/RocketDetails";
const SpaceX = () => {
  const [rocketsData, setRocketsData] = useState([]);

  const getRocketData = async () => {
    const data = await getRockets();
    if (data.status === 200) {
      console.log(data);
      setRocketsData(data.data);
    } else {
      setRocketsData([]);
    }
  };
  useEffect(() => {
    getRocketData();
  }, []);
  return (
    <>
      <div>{rocketsData.length === 0 && <p>No data available</p>}</div>
      <div>
        {rocketsData.length !== 0 && (
          <div>
            {rocketsData.map((ele) => (
              <div key={ele.key} className="flex justify-center items-center">
                <RocketDetails
                id= {ele.id}
                  desc={ele.description}
                  country={ele.country}
                  company={ele.company}
                  flickrImages={ele.flickr_images}
                  rocketName = {ele.rocket_name}
                  rocketId = {ele.rocket_id}
                  rocketType = {ele.rocket_type}
                  wiki = {ele.wikipedia}
                  mass={ele.mass}
                  active={ele.active}
                  firstFlight={ele.first_flight}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SpaceX;
