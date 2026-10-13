require('dotenv').config();
const express = require("express");
const appRoute = require("./src/routes");
const response = require("./src/middlewares/respone.middleware");
const errorHandler = require("./src/middlewares/errorHandler.middleware");
const notFound = require("./src/middlewares/notFound.middleware");
// require("./src/config/database")

const app = express();
const port = 3000;

app.use(express.json());
app.use(response);

app.get("/",
    (req, res, next) => {
        res.success("Hello")
    },
    (req, res) => {
        res.send("Hello ExpressJS");
    }
);

app.use("/api", appRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
