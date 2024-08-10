const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { getFullName, getInitialName, setName } = require("./sharedmethods.js");

const { Schema } = mongoose;


const teacherSchema = new Schema({
    ...BaseUserSchema.obj,

    role: {
        type: String,
        enum: ["teacher"]
    },

    date_of_employment:{
        type: Date,
        default: Date.now,
    },
    
    subjects: [String],

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

teacherSchema.methods.getFullName = getFullName;

teacherSchema.methods.getInitialName = getInitialName;

teacherSchema.methods.setName = setName;


const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;