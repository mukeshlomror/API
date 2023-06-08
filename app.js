require("dotenv").config();

const express = require("express");

const app = express();
const connectDB = require("./db/connect");

const product_routes = require("./routes/product");

app.get("/", (req,res) => {

    res.send("hi i am working on api and live");

});

const PORT = 5000;


//middlewares

app.use("/api/product", product_routes);



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Hi there I am listenning to ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();