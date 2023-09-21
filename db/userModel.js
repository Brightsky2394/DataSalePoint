const Mongoose = require('mongoose');
const userLoginSchema = new Mongoose.Schema({
    phone: {
        type: Number,
        required: [true, 'Please enter a phone number'],
        unique: [true, 'Phone number already exist'],
    },
    password: {
        type: 'String',
        required: [true, 'Please enter a password'],
        unique: false,
    }
});

const userRegisterSchema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter first name'],
        unique: [true, 'Name already exist'],
    },
    lastName: {
        type: String,
        required: [true, 'Please enter last name'],
        unique: [true, 'Name already exist'],
    },
    phone: {
        type: Number,
        required: [true, 'Please enter phone number'],
        unique: [true, 'Phone number exist'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exist'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        unique: false,
    }
})
