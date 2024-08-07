const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { Schema } = mongoose;


const studentSchema = new Schema({
    ...BaseUserSchema.obj,

    role: {
        type: String,
        enum: ["student"]
    },

    date_of_birth: {
        type: Date,
        required: [true, "Date of birth is required."]
    },

    date_of_enrollment: {
        type: Date,
        required: [true, "Date of enrollment is required."]
    },


    guardians: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "gaurdian",
        required: false
    },

    phone_number1: {
        type: String,
        required: false,
    },

    phone_number2: {
        type: String,
        required: false
    },


    Academic_year: {
        type: Number,
        required: true,
    },

    is_on_holiday: Boolean,

    has_demerits: {
        type: Boolean,
        default: false
    },

});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;