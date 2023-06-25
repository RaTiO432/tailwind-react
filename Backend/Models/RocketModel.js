const {rocketApi:{url}} =require("../Config/Config");

const getRocketsModel = async () =>{
    try {
        const fetchRockets = await fetch(url+'/rockets');
        const  rockets = await fetchRockets.json();
        return rockets;

    } catch (error) {
        console.error(error.message);
        throw error;
    }
    
};

const getRocketModel = async (rocketId) =>{
    try {
        const RocketId = rocketId;
        const fetchRockets = await fetch(url+'/rockets/' + RocketId);
        const  rockets = await fetchRockets.json();
        
        return rockets;

    } catch (error) {
        console.error(error.message);
        throw error;
    }
    
};

module.exports = {getRocketsModel,getRocketModel};
