import Logo from "../assets/images/logo.png";
import { CiGlobe } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex  w-full flex-col bg-[#121212] text-white mt-10 lg:mt-40 ">
      <div className="px-10 lg:px-24  2xl:container 2xl:mx-auto">
        <div className="flex flex-col   items-center xl:flex-row   text-white py-20 lg:py-30 gap-10  xl:justify-between xl:items-end w-full lg:gap-[107px]">
          <div className="flex flex-col items-center w-full  gap-6">
            <img src={Logo} alt="logo" className="  object-contain w-32 h-32" />
            <p className="xl:text-xl text-nowrap">
              Where Pet Care Meets <br className="hidden lg:block" /> Peace Of
              Mind.
            </p>
          </div>
          <div className="flex flex-col items-center xl:items-start gap-8">
            <p className="flex items-center font-bold text-2xl xl:text-3xl gap-1">
              ⏳ Launching In
            </p>
            <div className="flex items-center w-full gap-2 lg:gap-4">
              <div className="flex items-center gap-1 lg:gap-3">
                <span className=" p-2 xl:px-4 xl:py-3 rounded-2xl bg-[#ffa500] text-black">
                  25
                </span>
                <span>Days</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-2xl bg-[#ffa500] text-black">
                  12
                </span>
                <span>Hrs</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-2xl bg-[#ffa500] text-black">
                  45
                </span>
                <span>Mns</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-2xl bg-[#ffa500] text-black">
                  07
                </span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:items-start gap-4">
            <p>Be The First To Know - Enter Your Email</p>
            <div className="flex items-center justify-center w-full">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-3 xl:w-96 rounded-l-xl bg-white text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 sm:w-full xl:w-1/2 py-0  min-[584px]:py-3   2xl:py-3 rounded-r-xl  px-6 text-white"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="h-[0.5px]  w-full max-sm:hidden bg-[#858585]" />
      </div>
      <div className="h-[0.5px]  w-full sm:hidden bg-[#858585]" />
      <div className="flex flex-col max-md:justify-center lg:px-24 w-full lg:flex-row items-center 2xl:container 2xl:mx-auto  pt-10 gap-10 xl:gap-20 pb-16 ">
        <div className="flex items-center gap-1">
          <CiGlobe className="text-blue-300" />
          <span className="">Follow Our Journey</span>
        </div>
        <div className="flex items-center text-white gap-4">
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaFacebook className="text-[#1877F2] bg-white rounded-full text-4xl xl:text-2xl" />
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaTwitter className="bg-[#1DA1F2] rounded-full text-4xl xl:text-2xl p-1.5 xl:p-1" />{" "}
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaInstagram className="bg-[#E4405F] text-4xl xl:text-2xl rounded-full p-1 xl:p-0.5" />{" "}
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaLinkedinIn className="bg-[#0077B5] text-4xl xl:text-2xl rounded-full p-1 xl:p-0.5" />{" "}
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaWhatsapp className="bg-[#25D366] text-4xl xl:text-2xl p-1 xl:p-0.5 rounded-full" />{" "}
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaTelegramPlane className="bg-[#0088cc] text-4xl xl:text-2xl xl:p-1 p-1.5 rounded-full" />{" "}
          </a>
        </div>
      </div>
      <div className="bg-[#060606] flex w-full items-center justify-center py-6  border-t border-t-[#858585]">
        <p>&copy; 2025 Petezy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
