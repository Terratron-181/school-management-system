const mongoose = require("mongoose");
const userSchema = require("./user.js").schema;

const { Schema } = mongoose;


const teacherSchema = new Schema({
    ...userSchema.obj,

    date_of_employment:{
        type: Date,
        default: Date.now,
    },
    
    subjects: [String],

    phone_number1: {
        type: String,
        required: [
            true, 
            "One phone number is required."]
    },

    phone_number2: {
        type: String,
        required: false
    },

});


const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;