const { request } = require("express");
const {getUserModel,addUserModel,editUserModel,deleteUserModel,currentWeatherModel,forecastWeatherModel} = require("../Models/Model")

const getUser = (request,response) => {
    try {
        const userData = getUserModel();
        const responseObj={
            total: userData.length,
            data:userData,
            status:200,
            message: "SUCCESS"
        }
        response.status(200).json(responseObj);
    

    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data: [],
            status:400,
            message: error.message
        });
    }
}
const addUser = (request,response) => {
    try {
        const body = request.body;
        addUserModel(body);

        const responseObj = {
            message: "data inserted",
            status: 201,
            body
        }
        response.status(201).json(responseObj);

    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data: [],
            status:400,
            message: error.message
        });
    }
}
const editUser = (request,response) => {

    try {
        const body = request.body;
        const params = request.query;
        editUserModel(body,params);
        const responseObj = {
            status: 201,
            message:"entry updated",
        }
        response.status(201).json(responseObj);

    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data: [],
            status:400,
            message: error.message
        });
    }
}
const deleteUser = (request,response) => {
    try {
        const params = request.query;
        deleteUserModel(params)
        const responseObj = {
            status:200,
           message: "user deleted"
       }
       response.status(200).json(responseObj);

    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data: [],
            status:400,
            message: error.message
        });
    }
}
const currentWeather = async (request,response) => {
    try {
        const queryParams = request.query;
        const data = await currentWeatherModel(queryParams);
        response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data,
            status:400,
            message: error.message
        });
    }
}
const forecastWeather = async (request,response) => {
    try {
        const queryParams = request.query;
        const data = await forecastWeatherModel(queryParams);
        response.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        response.status(400).json({
            total: 0,
            data,
            status:400,
            message: error.message
        });
    }
}
    module.exports = {getUser,addUser,editUser,deleteUser,currentWeather,forecastWeather};