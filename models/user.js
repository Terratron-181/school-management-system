const mongoose = require("mongoose");

const { Schema } = mongoose;

const baseUserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "A name is required."]
    },

    second_name: {
        type: String,
        required: [true, "A name is required."]
    },

    third_name: {
        type: String,
        required: [true, "A name is required."]
    },

    fourth_name: {
        type: String,
        required: [true, "A name is required."]
    },

    fifth_name: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: [true, "An Email is required."]
    },

    role: {
        type: String,
        required: [true, "A role is required."],
        enum: [
            "guest",
            "principal", 
            "vice_principal", 
            "admin", 
            "teacher", 
            "assistant_teacher", 
            "guardian", 
            "student"
        ],
    }
});

const BaseUser = mongoose.model("base_user", userSchema);

module.exports = BaseUser;

