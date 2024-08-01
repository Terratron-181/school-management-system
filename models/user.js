const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "A name is required."]
    },

    Second_name: {
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

    phone_number: {
        type: String,
        required: false
    },

    role: {
        type: String,
        required: [true, "A role is required."],
        enum: ["principal", "vice_principal", "admin", "teacher",  "parent", "student"],
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

