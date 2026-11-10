const express = require("express")


const app = express()  // server ko initiate karna or server ka ek instense create karna

app.use(express.json())//middleware ye request.body m data ko alow karta hai

// require all the routes here 
const authRouter = require("./routes/auth.routes")
//using all the router here
app.use("/api/auth", authRouter)

module.exports = app