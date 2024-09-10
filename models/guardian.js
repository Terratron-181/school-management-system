const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { getFullName, getInitialName, setName } = require("./sharedmethods.js");

const { Schema } = mongoose;


const guardianSchema = new Schema({
    ...BaseUserSchema.obj,

    role: {
        type: String,
        enum: ["guardian"]
    },

    guardian_of: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "student",
    },

    phone_number1: {
        type: String,
        required: [
            true, 
            "One phone number is required."
        ]
    },

    phone_number2: {
        type: String,
        required: false
    },
});

guardianSchema.methods.getFullName = getFullName;

guardianSchema.methods.getInitialName = getInitialName;

guardianSchema.methods.setName = setName;



const Guardian = mongoose.model("guardian", guardianSchema);

module.exports = Guardian;