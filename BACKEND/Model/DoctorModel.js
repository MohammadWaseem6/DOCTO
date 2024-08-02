import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const doctorSchema = new mongoose.Schema({
    // Basic Information
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
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
    phoneNumber: {
        type: String,
        required: true,
    },
    
    // Professional Information
    specialization: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true,
    },
    hospital: {
        type: String,
        required: true,
    },
    licenseNumber: {
        type: String,
        required: true,
    },
    
    // Other Information
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    
    // Generated ID for Doctors
    doctorID: {
        type: String,
        unique: true,
    },
});

// Middleware to generate unique doctorID and hash password and license number before saving
doctorSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.doctorID = 'DOC-' + Math.floor(1000 + Math.random() * 9000);
    }

    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    if (this.isModified('licenseNumber')) {
        const salt = await bcrypt.genSalt(10);
        this.licenseNumber = await bcrypt.hash(this.licenseNumber, salt);
    }

    next();
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
