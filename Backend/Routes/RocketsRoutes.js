const {getRockets,getRocket} = require ("../Controller/RocketController")
const routes = require("express").Router();

routes.get("/rockets",getRockets);
routes.get("/rockets/:id",getRocket);

module.exports = routes;