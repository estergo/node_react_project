const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    manpowerCompany: String,
    city: String,
    jobTitle: {
        type: String,
        required: true
    },
    jobDescription: String
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: String,
    city: String,
    jobDetails: JobSchema
});

module.exports = UserSchema;