import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const MobileNavigation = ({ activeIndex, handlePrev, handleNext }: any) => {
  return (
    <div className="flex z-50 py-6 items-center justify-center bg-white gap-6 md:hidden">
      <div onClick={handlePrev} className="cursor-pointer">
        <FaChevronCircleLeft size={28} className="text-[#092f55]" />
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-[35px] h-2 rounded-full ${
              activeIndex === index ? "bg-[#0b5eaa]" : "bg-gray-400"
            } transition-all duration-300`}
          />
        ))}
      </div>

      <div onClick={handleNext} className="cursor-pointer">
        <FaChevronCircleRight size={28} className="text-[#092f55]" />
      </div>
    </div>
  );
};

export default MobileNavigation;
