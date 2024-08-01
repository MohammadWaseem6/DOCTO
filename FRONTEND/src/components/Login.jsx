import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/users/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const result = await response.json();
            // Handle the response as needed
            alert("login success", result)
            console.log("login success");
            navigate('/')

        } catch (error) {
            console.error('Error during login:', error);
            // Handle the error appropriately
        }
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                        Login
                    </button>
                    <p className="text-center mt-2 text-gray-500">
                       Doctor's login <a href="/signup"></a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
