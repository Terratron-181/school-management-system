const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { Schema } = mongoose;

console.log(userSchema.obj);

const studentSchema = new Schema({
    ...BaseUserSchema.obj,

    role: {
        type: String,
        enum: ["student"]
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

    date_of_birth: Date,

    date_of_enrollment: Date,

    Academic_year: {
        type: Number,
        required: true,
    },

    is_on_holiday: Boolean,

});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;