const http = require("http");
const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const os = require("os");
const browser = require("browser-detect");
const router = require("./Routes/routes");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
const port = 8082 || process.env.port;


app.use(router);


app.get("/methods", (request, response) => {
    response.status = 200;
    response.json({
      currentOS: os.platform(),
      networkInterface: os.networkInterfaces(),
      uptime: os.uptime(),
      version: os.version(),
      browser: browser(request.headers["user-agent"]),
    })
})
app.listen(port,()=>{
    console.log(chalk.red("Your server is running on ",chalk.blueBright(port)));
})