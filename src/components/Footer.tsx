import Logo from "../assets/images/logo.png";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex max-s w-full flex-col bg-[#121212] text-white  lg:mt-40 ">
      <div className="px-4 lg:px-26 p-14  2xl:container 2xl:mx-auto flex flex-col gap-10 ">
        <div className="flex flex-col    items-center xl:flex-row   text-white gap-10 xl:justify-start xl:items-end w-full lg:gap-20">
          <div className="flex flex-col  items-start justify-center   gap-6">
            <img
              src={Logo}
              alt="logo"
              className="  mx-auto object-contain w-32 h-32"
            />
            <p className="xl:text-xl font-normal text-[#e8f3fe] text-nowrap">
              Where Pet Care Meets <br className="max-sm:hidden" /> Peace Of
              Mind.
            </p>
          </div>
          <div className="flex flex-col  items-center xl:items-start gap-8">
            <p className="flex items-center font-bold text-2xl xl:text-3xl gap-1">
              ⏳ Launching In
            </p>
            <div className="flex font-medium sm:text-lg items-center w-full gap-6 lg:gap-4">
              <div className="flex items-center gap-1 lg:gap-3">
                <span className=" p-2 xl:px-4 xl:py-3 rounded-lg bg-[#ffa500] text-black">
                  25
                </span>
                <span>Days</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-lg bg-[#ffa500] text-black">
                  12
                </span>
                <span>Hrs</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-lg bg-[#ffa500] text-black">
                  45
                </span>
                <span>Mns</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-3">
                <span className="p-2 xl:px-4 xl:py-3 rounded-lg bg-[#ffa500] text-black">
                  07
                </span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full lg:items-start gap-4">
            <p className="text-left font-nunito">
              Be The First To Know - Enter Your Email
            </p>
            <div className="flex items-center justify-center w-full">
              <input
                type="text"
                placeholder="Yourname@Email.com"
                className="px-4 py-3 w-full  rounded-l-xl bg-white text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 text-nowrap px-4 py-3 rounded-r-xl text-white"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px]   bg-[#858585]" />
      </div>
      {/* <div className="h-[1px]  mx-8 sm:hidden bg-[#858585]" /> */}
      <div className="flex flex-col max-md:justify-center lg:px-24 w-full lg:flex-row items-center 2xl:container 2xl:mx-auto   gap-6 xl:gap-20 pb-10 ">
        <div className="flex items-center gap-1">
          <CiGlobe className="text-blue-300" />
          <span className="">Follow Our Journey</span>
        </div>
        <div className="flex items-center text-white gap-4">
          <a href="/" rel="noopener noreferrer" target="_blank">
            {" "}
            <FaFacebookF className="text-white bg-[#1877F2] rounded-full pt-1 text-4xl xl:text-2xl" />
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
            <TiSocialLinkedin className="bg-[#0077B5] text-4xl xl:text-2xl rounded-full  " />{" "}
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
