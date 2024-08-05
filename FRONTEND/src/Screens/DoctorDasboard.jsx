import d from '../assets/images/d.jpg';

//ICONS
import { LuLayoutDashboard } from 'react-icons/lu';
import { GrSchedules } from 'react-icons/gr';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { MdHelpCenter } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { PiChartPieSliceDuotone } from 'react-icons/pi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoChevronDownOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaBedSolid } from "react-icons/lia";

import Calendar from 'react-calendar';




function DoctorDashboard() {
  



    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white h-screen p-4 font-semibold py-5">
                <h2 className="text-2xl font-semibold mb-4">DOCTO™</h2>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 mb-6 text-black rounded-lg"
                    aria-label="Search"
                />
                <ul className="space-y-4">
                    <li className="text-gray-500 font-semibold uppercase">Main</li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <LuLayoutDashboard aria-label="Dashboard" />
                        <span>Dashboard</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <GrSchedules aria-label="Schedules" />
                        <span>Schedules</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <FaRegUserCircle aria-label="Patients" />
                        <span>Patients</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <BsFillJournalBookmarkFill aria-label="Appointments" />
                        <span>Appointments</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <BiNotepad aria-label="Billing" />
                        <span>Billing</span>
                    </li>
                    <li className="text-gray-500 font-semibold uppercase">Data Visualization</li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <MdHelpCenter aria-label="Ed Charts" />
                        <span>Ed Charts</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <PiChartPieSliceDuotone aria-label="Morris Charts" />
                        <span>Morris Charts</span>
                    </li>
                    <li className="text-gray-500 font-semibold uppercase">Support</li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <MdHelpCenter aria-label="Help Center" />
                        <span>Help Center</span>
                    </li>
                    <li className="flex items-center mb-2 space-x-3 cursor-pointer hover:text-gray-300">
                        <CiSettings aria-label="Settings" />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>


            <div className="flex-1 p-6 bg-gray-100">
                {/* Header */}
                <div className="bg-white p-4 shadow-md flex justify-between items-center rounded-full">
                    <h1 className="text-2xl font-semibold">Good Morning, Dr. Manzoor!</h1>
                    <div className="flex items-center space-x-4">
                        <IoIosNotificationsOutline className="w-5 h-5 cursor-pointer hover:text-gray-600" aria-label="Notifications" />
                        <CiSettings className="w-5 h-5 cursor-pointer hover:text-gray-600" aria-label="Settings" />
                        <img src={d} alt="Profile" className="w-14 h-14 rounded-full" />
                        <IoChevronDownOutline className="w-5 h-5 cursor-pointer hover:text-gray-600" aria-label="Dropdown" />
                    </div>
                </div>

                <div className='border border-black rounded-md mt-5 p-4'>
                    <div className='grid gap-4 sm:grid-cols-2'>
                        <div className='min-h-[200px] bg-gray-200 rounded-md p-4 flex flex-col items-center justify-center'>
                            <div className="flex flex-col items-center text-center">
                                <LiaBedSolid className="text-4xl mb-2" />
                                <span className="text-xl font-semibold">BEDS</span>
                                <p className="mt-2 text-gray-600">Available Beds</p>
                            </div>
                        </div>
                        <div className='min-h-[200px] bg-gray-200 rounded-md p-4 flex flex-col items-center justify-center'>
                            <FaUserDoctor className="text-4xl mb-2" />
                            <span className="text-xl font-semibold">doctors</span>
                            <p className="mt-2 text-gray-600">Available Doctors</p>
                        </div>

                    </div>
                </div>

                <div className='grid sm:grid-cols-12 gap-4 mt-3'>
                    <div className='min-h-[400px] sm:col-span-9 bg-gray-500 rounded-md p-4'>
                        <div className='rounded-lg p-4 mb-4 w-full text-center font-semibold text-2xl text- mr-72 '>
                            Patients

                        </div>
                        <div className='overflow-x-auto'>
                            <table className='w-full table-auto border-collapse text-white'>
                                <thead>
                                    <tr className='bg-gray-700'>

                                        <th className='border px-4 py-2'>Serial Number</th>
                                        <th className='border px-4 py-2'>Name</th>
                                        <th className='border px-4 py-2'>Ward</th>
                                        <th className='border px-4 py-2'>Status</th>
                                        <th className='border px-4 py-2'>Priority</th>
                                        <th className='border px-4 py-2'>Start Date</th>
                                        <th className='border px-4 py-2'>End Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Example Row */}

                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='min-h-[400px] sm:col-span-3 bg-red-500 rounded-lg p-6'>
                        <h1 className='text-white text-2xl font-bold mb-4'>Calendar</h1>
                        <div className='bg-white p-6 rounded-lg shadow-xl'>
                            <Calendar
                                className='react-calendar'
                                tileClassName={({ date, view }) => {
                                    if (view === 'month') {
                                        // Add custom styling for specific dates if needed
                                        if (date.getDate() === 1) {
                                            return 'bg-blue-100 text-blue-600 font-bold'; // Example styling for the 1st of the month
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>




            </div>








        </div>
    );
}

export default DoctorDashboard;
