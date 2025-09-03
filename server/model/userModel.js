import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "educator"],
        required: true,
    },
    profilePhotoUrl: {
        type: String,
        default: ""
    },
    enrollCourses: [{
        type: mongoose.Schema.ObjectId,
        ref: "Course"
    }]
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

export default (User);