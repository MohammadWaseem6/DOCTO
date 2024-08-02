import React, { useState } from 'react';

const DoctorSignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        specialization: '',
        yearsOfExperience: '',
        hospital: '',
        licenseNumber: '',
        address: '',
        city: '',
        zipCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/doctors/createdoctor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the doctor profile.');
        }
    };

    return (
        <div className="bg-green-400 min-h-screen flex items-center justify-center overflow-hidden">
            <div className="bg-gray-300 p-6 rounded-lg shadow-md w-full max-w-3xl h-[90vh] flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-6 text-center">Doctor Sign-Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Years of Experience</label>
                        <input
                            type="number"
                            name="yearsOfExperience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Hospital</label>
                        <input
                            type="text"
                            name="hospital"
                            value={formData.hospital}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">License Number</label>
                        <input
                            type="text"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Zip Code</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DoctorSignUp;
