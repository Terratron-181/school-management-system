const mongoose = require("mongoose");
const BaseUserSchema = require("./user.js").schema;

const Guardian = require("./guardian.js");
const Demerit = require("./demerit.js");

const { getFullName, getInitialName, setName } = require("./sharedmethods.js");

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
        default: Date.now
    },


    guardians: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "guardian",
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


    academic_year: {
        type: Number,
        required: [true, "Academic year is required."]
    },

    is_on_holiday: {
        type: Boolean,
        default: true
    },

    has_demerits: {
        type: Boolean,
        default: false
    },

    number_of_demerits: {
        type: Number,
        default: 0
    }

});

studentSchema.methods.getFullName = getFullName;

studentSchema.methods.getInitialName = getInitialName;

studentSchema.methods.setName = setName;

studentSchema.methods.updatehas_demerits = async function(new_value) {
    try {
        if (!new_value) {
            this.number_of_demerits = 0;
        };
        this.has_demerits = new_value;
        await this.save();        
    } catch (error) {
        console.log(`Failed: updating has_demerits of student(${this._id})\n -error.msg: ${error.message}`);        
    }
}

studentSchema.methods.listGuardians = function() {
    if (this.guardians.legnth > 0) {
        let guardians_object = {};
        for (id in this.guardians) {
            const guardian = Guardian.findById(id);
            guardians_object[guardian._id] = guardian.getFullName();
        }
        return guardians_object;
    } else {
        throw new Error(`Empty: Student(${this._id}) has no gaurdians assigned.`);
    }
};


studentSchema.methods.issueDemerit = async function(issued_by, description) {
    try {
        if (!this.has_demerits){
            this.updatehas_demerits(true);
        }
        const demerit = new Demerit({
            student_id: this._id,
            issued_by: issued_by,
            description: description
        });
        await demerit.save();
        console.log(`Successful: issued student(${this._id}) demerit(${demerit._id}).`);
    } catch (error) {
        console.log(`Faild: issueDemerit(issued_by:${issued_by}, description:${description})\n -error.msg: ${error.message}`);
    }
};



const Student = mongoose.model("student", studentSchema);

module.exports = Student;