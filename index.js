const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const ConnectDB = require("./Config/MongoDB")

// config
app.use(express.json())
app.use(cors())
dotenv.config()

// Database Connection
ConnectDB(process.env.MONGO_URI)


// import Router
const authRoute = require("./Routers/AuthRoute")
const userRoute = require("./Routers/UserRoute")
const BrandRoute = require("./Routers/BrandRoute")
const CategoryRoute = require("./Routers/CategoryRoute")
const ProductRoute = require("./Routers/ProductRoute")

// Config Route
app.use("/", authRoute)
app.use("/", userRoute)
app.use("/", BrandRoute)
app.use("/", CategoryRoute)
app.use("/", ProductRoute)



// Listen port
app.listen(process.env.PORT, () => {
    console.log("Server Started Port=> " + process.env.PORT)
})