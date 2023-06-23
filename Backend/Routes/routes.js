const { Router } = require("express");
const { getUser , addUser,editUser,deleteUser,currentWeather} = require("../Controller/Controller")
const router = require("express").Router();

//user display
router.get("/user",getUser)

//user created
router.post("/user",addUser)

//user update
router.put("/user",editUser);

//user delete
router.delete("/user",deleteUser)

router.get("/currentweather",currentWeather)

module.exports = router;