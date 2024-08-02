/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [doctorCredentials, setDoctorCredentials] = useState({
        email: '',
        password: '',
    });
    const [patientCredentials, setPatientCredentials] = useState({
        aadhaar: '',
        password: '',
    });

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const credentials = type === 'doctor' ? doctorCredentials : patientCredentials;

        try {
            const response = await fetch(`http://localhost:3000/api/${type}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const result = await response.json();
            alert("Login success", result);
            console.log("Login success");
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        type === 'doctor'
            ? setDoctorCredentials((prevState) => ({ ...prevState, [name]: value }))
            : setPatientCredentials((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="flex flex-col lg:flex-row bg-gray-700 rounded shadow-lg overflow-hidden w-full h-[700px] mt-20 items-center justify-center ">

            {/* Doctor Login */}
            <div className="w-[500px] p-10 ml-20 bg-red-500 rounded-lg">
                <h2 className="text-3xl font-semibold mb-6">Doctor Login</h2>
                <form onSubmit={(e) => handleSubmit(e, 'doctor')}>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={doctorCredentials.email}
                            onChange={(e) => handleChange(e, 'doctor')}
                            className="w-full px-4 py-3 border rounded text-lg"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={doctorCredentials.password}
                            onChange={(e) => handleChange(e, 'doctor')}
                            className="w-full px-4 py-3 border rounded text-lg"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded text-lg">
                        Login
                    </button>
                </form>
            </div>

            {/* Patient Login */}
            <div className="w-[500px] p-10 ml-20 bg-purple-500 rounded-lg">
                <h2 className="text-3xl font-semibold mb-6">Patient Login</h2>
                <form onSubmit={(e) => handleSubmit(e, 'patient')}>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Aadhaar Number</label>
                        <input
                            type="text"
                            name="aadhaar"
                            value={patientCredentials.aadhaar}
                            onChange={(e) => handleChange(e, 'patient')}
                            className="w-full px-4 py-3 border rounded text-lg"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={patientCredentials.password}
                            onChange={(e) => handleChange(e, 'patient')}
                            className="w-full px-4 py-3 border rounded text-lg"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded text-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Login;
