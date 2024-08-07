const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { Schema } = mongoose;


const gaurdianSchema = new Schema({
    ...BaseUserSchema.obj,

    role: {
        type: String,
        enum: ["gaurdian"]
    },

    gaurdian_of: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "student",
        required: [
            true,
            "The student(s) must be registered first"
        ]
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


const Gaurdian = mongoose.model("gaurdian", gaurdianSchema);

module.exports = Gaurdian;