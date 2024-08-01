import d from '../assets/images/d1.jpeg';
import { FaSearch, FaBars } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-xl">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Providing Quality Healthcare for a Brighter and Healthy Future
          </h1>
          <p className="text-lg  mb-6 font-semibold text-blue-950">
            At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry.
          </p>
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Appointments
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Watch Video
            </button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg w-[850px]">
            <h2 className="text-3xl mt-4 mb-4">Find a Doctor</h2>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex items-center bg-white border rounded px-3 py-2">
                <FaSearch className="text-gray-600 mr-2" />
                <input type="text" className="flex-1 outline-none" placeholder="Search for a doctor" />
              </div>
              <div className="flex items-center bg-white border rounded px-3 py-2">
                <FaBars className="text-gray-600 mr-2" />
                <select className="flex-1 outline-none">
                  <option value="">Select District</option>
                  <option value="District 1">District 1</option>
                  <option value="District 2">District 2</option>
                  <option value="District 3">District 3</option>
                </select>
              </div>
              <div className="flex items-center bg-white border rounded px-3 py-2">
                <FaBars className="text-gray-600 mr-2" />
                <select className="flex-1 outline-none">
                  <option value="">Select Specialty</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="flex items-center bg-white border rounded px-3 py-2 w-[200px]">
                <FaBars className="text-gray-600 mr-2" />
                <select className="flex-1 outline-none">
                  <option value="">Select Hospital</option>
                  <option value="Hospital 1">Hospital 1</option>
                  <option value="Hospital 2">Hospital 2</option>
                  <option value="Hospital 3">Hospital 3</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={d}
            alt="Healthcare"
            className="w-full max-w-md rounded-lg ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
