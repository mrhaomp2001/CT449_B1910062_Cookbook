const express = require("express");
const cors = require("cors");
const routes = require("./app/routes")
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({message: "welcome"});
});

routes.Start(app);

app.use((req, res, next) => {
    //chạy khi không có route nào
    return next(new ApiError(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;