import { useState, useEffect } from 'react';

function DoctorDashboard() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/patients'); // Adjust this URL to 
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="bg-white min-h-screen p-8">
            <h1 className="text-3xl font-semibold mb-8">Doctor Dashboard</h1>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4">Number of Patients: {patients.length}</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Serial Number</th>
                            <th className="border px-4 py-2">Patient Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={patient.id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{patient.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoctorDashboard;
