const mongoose = require("mongoose");

const { Schema } = mongoose;


const gradeSchema = new Schema({

    student_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    date_of_examination: {
        type: Date,
        required: true
    },

    mark: {
        type: Number,
        required: true,
    },

    full_mark: {
        type: Number,
        required: true,
    }
    
});


const Grade = mongoose.model("grade", gradeSchema);

module.exports = Grade;