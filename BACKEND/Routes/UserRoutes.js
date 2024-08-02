import express from 'express';
import User from '../Model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Create User
router.post('/createuser', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            bloodgroup: req.body.bloodgroup,
            address: req.body.address,
        });

        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation Error',
                errors: Object.values(error.errors).map(err => err.message)
            });
        }

        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'User logged in successfully', token, user });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

export default router;
