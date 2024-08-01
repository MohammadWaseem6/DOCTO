import { Link } from "react-router-dom";
import Home from "../Screens/Home";


const Navbar = () => {
    return (
        <div>
        <div className="flex flex-col font-semibold text-black p-4 ">
            
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    DOCTO
                </h1>

                <ul className="flex space-x-10">
                    <li>
                        <Link to="/home" className="hover:text-gray-300 text-[#007E85]">Home</Link>
                    </li>
                    <li>
                        <Link to="/services" className="hover:text-gray-300 text-black">Services</Link>
                    </li>
                    <li>
                        <Link to="/help" className="hover:text-gray-300 text-black">Help</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 text-black">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="hover:text-gray-300 text-black">Blogs</Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-6">
                    <Link className="text-black text-center bg-[#007E85] rounded-md w-[70px] h-8 flex items-center justify-center hover:bg-[#005F63]"
                        to="/login">Login</Link>
                    <Link
                        className="text-[#007E85] hover:text-[#005F63]"
                        to="/signup">Sign Up</Link>
                </div>
                
            </div>
        
        </div>
        <Home/>
        </div>
    );
};

export default Navbar;
