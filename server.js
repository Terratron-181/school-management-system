const express = require("express");
const { connectToDB } = require("./config/database.js");
const { PORT } = require("./config/env.json");

async function main() {

    const app = express();
    try {
        await connectToDB();

        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("Advanced School management System");
        });

        app.listen(PORT, () => {
            console.log(`Successful: Running on port ${PORT}.`);
        });
    } catch (error) {
        console.log(`Failed: main()-->connectToDB(). \n  err.msg: ${error.message}`);
        process.exit(1);   
    }
};

main();

