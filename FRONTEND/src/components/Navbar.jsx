import { Link } from "react-router-dom";
const Navbar = () => {
    return (

        <div className="flex flex-col  font-semibold text-white p-4 bg-purple-900">
            <div className="flex justify-between items-center font-semibold">
                <h1 className="text-xl"> </h1>
                <ul className="flex space-x-10">
                    <li>
                        <Link to="/home" className="hover:text-gray-300 text-[#007E85]">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-300 text-black">Services</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-300 text-black">Help</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 text-black">Contact</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 text-black">Blogs</Link>
                    </li>

                </ul>
                <div className="flex items-center space-x-6">
                    <Link className="text-black text-center bg-[#007E85] rounded-md  w-[55px] h-8"
                        to="/login">Login</Link>
                    <Link
                        className="text-[#007E85]"
                        to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
