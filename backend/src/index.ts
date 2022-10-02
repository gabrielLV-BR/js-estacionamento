import dotenv from "dotenv"
dotenv.config()

import express from "express"
const app = express()

import VehicleRouter from "./routes/vehicle"

app.use(express.json())
app.use(express.static("assets"))

app.get("/", (req, res) => {

})

app.use("/vehicle", VehicleRouter);

const port = process.env.SERVER_PORT ?? 5050
app.listen(port, () => {
    console.log("%cListening on", "color: dodgerblue;")
    console.log(`\t%chttp://localhost:${port}/`, "color: yellow")
})
