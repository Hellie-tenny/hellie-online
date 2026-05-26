import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { IoMailUnreadSharp } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="bg-black p-4">
      <span className="block text-2xl font-bold text-[#E7FDF6]">
        Hellie<span className="text-[#F25C0C]">.</span>
      </span>
      <FaFacebook className="my-5 mr-5 inline text-[#E7FDF6]" />
      <IoMailUnreadSharp className="my-5 mr-5 inline text-[#E7FDF6]" />
      <BsTwitterX className="my-5 mr-5 inline text-[#E7FDF6]" />
      <span className="block text-center text-[#E7FDF6]">Powered By Rocket &copy; 2025</span>
    </footer>
  );
}

export default Footer;
