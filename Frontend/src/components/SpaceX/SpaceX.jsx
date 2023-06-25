import React, { useEffect, useState } from "react";
import { getRockets } from "../../Shared/API/WeatherApi";
import RocketDetails from "./RocketDetails/RocketDetails";
import SpaceLoader from "../../Shared/SpaceLoader";
const SpaceX = () => {
  const [rocketsData, setRocketsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getRocketData = async () => {
    setLoader(true);
    const data = await getRockets();
    if (data.status === 200) {
      setLoader(false)
      console.log(data);
      setRocketsData(data.data);
    } else {
      setLoader(false);
      setRocketsData([]);
    }
  };

  useEffect(() => {
    getRocketData();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          {loader && <SpaceLoader />}
        </div>
        <div>{rocketsData.length === 0 && !loader && <p>No data available</p>}</div>
        <div>
          {rocketsData.length !== 0 && (
            <div>
              {rocketsData.map((ele) => (
                <div key={ele.key}>
                  <RocketDetails
                    id={ele.id}
                    desc={ele.description}
                    country={ele.country}
                    company={ele.company}
                    flickrImages={ele.flickr_images}
                    rocketName={ele.rocket_name}
                    rocketId={ele.rocket_id}
                    rocketType={ele.rocket_type}
                    wiki={ele.wikipedia}
                    mass={ele.mass}
                    active={ele.active}
                    firstFlight={ele.first_flight}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SpaceX;
