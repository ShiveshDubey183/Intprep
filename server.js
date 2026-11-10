require("dotenv").config() //config ek method hai jisco ham jab call karte hai to jo variable use hoga env file me use access kar payenge pure exprees server k andar.
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB();


app.listen(3000, () => {
    console.log("Server is running on port 3000 ")
});