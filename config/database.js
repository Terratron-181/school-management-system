//const dotenv = require("dotenv");
const { MONGO_URI } = require("./env.json");
const mongoose = require("mongoose");

//dotenv.config({ path: "../config/.env" });


console.log(MONGO_URI);

const connectToDatabase = async function() {
    console.log(`\nConnecting to DB...`);
    try {
        await mongoose.connect(MONGO_URI).then(
            console.log(`Successful: connected to DB...`)
        );
    } catch (error) {
        console.log(`Failed: connectToDatabase() \n err.msg: ${error.message}.`);
        process.exit(1);        
    }
};

connectToDatabase();
module.exports = connectToDatabase;