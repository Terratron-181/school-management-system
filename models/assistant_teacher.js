const mongoose = require("mongoose");
const teacherSchema = require("./teacher.js").schema;

const { getFullName, getInitialName, setName } = require("./sharedmethods.js");

const { Schema } = mongoose;

const assistantTeacherSchema = new Schema({
    ...teacherSchema.obj,

    role: {
        type: String,
        enum: ["assistant_teacher"]
    },
});

assistantTeacherSchema.methods.getFullName = getFullName;

assistantTeacherSchema.methods.getInitialName = getInitialName;

assistantTeacherSchema.methods.setName = setName;

const AssistantTeacher = mongoose.model(
    "assistant_teacher", 
    assistantTeacherSchema
);

module.exports = AssistantTeacher;