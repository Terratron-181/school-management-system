const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const Gaurdian = require("./gaurdian.js");
const Demerit = require("./demerit.js");

const { getFullName, getInitialName } = require("./sharedmethods.js");

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

studentSchema.methods.getFullName = getFullName;

studentSchema.methods.getInitialName = getInitialName;

studentSchema.methods.listGaurdians = function() {
    if (this.guardians.legnth > 0) {
        let gaurdians_object = {};
        for (id in this.guardians) {
            const gaurdian = Gaurdian.findById(id);
            gaurdians_list[gaurdian._id] = gaurdian.getFullName;
        }
        return gaurdians_object;
    } else {
        throw new Error(`Empty: Student(${this._id}) has no gaurdians assigned.`);  
    }
};


studentSchema.methods.issueDemerit = async function(issued_by, description) {
    try {
        const demerit = new Demerit({
            student_id: this._id,
            issued_by: issued_by,
            description: description
        });
        await demerit.save();
        console.log(`Successful: issued student(${this._id}) demerit(${demerit._id}).`);
    } catch (error) {
        console.log(`Faild: issueDemerit(${issued_by}, ${description}): ${error.message}`);       
    }
};



const Student = mongoose.model("student", studentSchema);

module.exports = Student;