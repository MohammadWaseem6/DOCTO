import express from 'express';
import User from '../Model/userModel.js';

const router = express.Router();

router.post('/createuser', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'User logged in successfully', user });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

export default router;
