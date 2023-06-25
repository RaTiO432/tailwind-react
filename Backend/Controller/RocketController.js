const {getRocketsModel,getRocketModel} =require("../Models/RocketModel")
const getRockets = async (request,response)=>{
try {
    const rockets = await getRocketsModel();
    console.log(!!rockets);
    if(!!rockets && rockets.length=== 0)
    {
        const emptyRockets = {
            data:[],
            total:0,
            message:"no data available",
            status: 404
        }
       
        response.status(400).json(emptyRockets);
    }

    else{
        const successResponse = {
            data: rockets,
            total: rockets.length,
            message: "success",
            status:200
        }
       
        response.status(200).json(successResponse);
    }
} 

catch (error) {
    console.error(error.message);
    const errorResponse = {
        data: [],
        total:0,
        message:error.message,
        status:500,
    }
    response.status(500).json(errorResponse);
}
}

const getRocket = async (request,response)=>{
    try {
        const {id}= request.params;
        const rockets = await getRocketModel(id);
        console.log(!!rockets);
        if(!!rockets && rockets.length=== 0)
        {
            const emptyRockets = {
                data:[],
                total:0,
                message:"no data available",
                status: 404
            }
           
            response.status(400).json(emptyRockets);
        }
    
        else{
            const successResponse = {
                data: rockets,
                total: rockets.length,
                message: "success",
                status:200
            }
           
            response.status(200).json(successResponse);
        }
    } 
    
    catch (error) {
        console.error(error.message);
        const errorResponse = {
            data: [],
            total:0,
            message:error.message,
            status:500,
        }
        response.status(500).json(errorResponse);
    }
    }
// getRockets();
module.exports={getRockets,getRocket};
