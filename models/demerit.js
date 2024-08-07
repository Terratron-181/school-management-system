const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const { Schema } = mongoose;


const demeritSchema = new Schema({

    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
    },

    issued_by: {
        type: String,
        required: true
    },

    date_of_issuance: {
        type: Date,
        default: Date.now
    },

    description: {
        type: String,
        required: [
            true, 
            "A description is required."
        ]
    }

});

const Demerit = mongoose.model("demerit", demeritSchema);

module.exports = Demerit;

