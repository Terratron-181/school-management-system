const mongoose = require("mongoose");
const teacherSchema = require("./teacher.js").schema;

const { Schema } = mongoose;

const assistantTeacherSchema = new Schema({
    ...teacherSchema.obj,
});

const assistantTeacher = mongoose.model(
    "assistant_teacher", 
    assistantTeacherSchema
);

module.exports = assistantTeacher;