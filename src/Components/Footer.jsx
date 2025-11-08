import { FaFacebook } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='p-4 bg-black'>
            <span className='block text-[#E7FDF6] font-bold text-2xl'>Hellie<span className='text-[#F25C0C]'>.</span></span>
            <FaFacebook className='text-[#E7FDF6] my-5 mr-5 inline' />
            <IoMailUnreadSharp className='text-[#E7FDF6] my-5 mr-5 inline' />
            <BsTwitterX className='text-[#E7FDF6] my-5 mr-5 inline' />
            <span className='block text-center text-[#E7FDF6]'>Powered By Rocket &copy; 2025</span>
            <div></div>
        </footer>
    );
}

export default Footer;