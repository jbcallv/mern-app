import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: false
    },
    studentId: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})