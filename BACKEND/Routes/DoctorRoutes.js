import express from 'express';
import Doctor from '../Model/DoctorModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/createdoctor', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const hashedLicenseNumber = await bcrypt.hash(req.body.licenseNumber, 10);

        const doctor = await Doctor.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
            specialization: req.body.specialization,
            yearsOfExperience: req.body.yearsOfExperience,
            hospital: req.body.hospital,
            licenseNumber: hashedLicenseNumber,
            address: req.body.address,
            city: req.body.city,
            zipCode: req.body.zipCode,
            doctorID: 'DOC-' + Math.floor(1000 + Math.random() * 9000),
        });

        res.status(201).json({ message: 'Doctor created successfully', doctor });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation Error',
                errors: Object.values(error.errors).map(err => err.message),
            });
        }
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

export default router;
