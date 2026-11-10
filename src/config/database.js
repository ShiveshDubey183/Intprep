
const mongoose = require("mongoose");
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (err) {
        console.log("Database Connection Failed:", err.message);
        throw err;
    }
}

module.exports = connectToDB;


// const mongoose = require("mongoose");

// async function connectToDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Connected to Database");
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = connectToDB;