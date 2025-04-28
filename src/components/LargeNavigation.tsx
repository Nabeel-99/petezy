import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

interface LargeScreenNavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const LargeNavigation = ({
  activeIndex,
  handlePrev,
  handleNext,
}: LargeScreenNavigationProps) => {
  return (
    <div className="max-md:hidden absolute left-1/2   top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center ">
          <div
            className={`custom-bullet ${
              activeIndex === index ? "custom-bullet-active" : ""
            }`}
          />
          {activeIndex === index && (
            <div className="absolute  flex flex-col items-center gap-4 -translate-x-1/2 left-1/2">
              <div
                onClick={handlePrev}
                className="custom-prev cursor-pointer translate-x-10 transition-all ease-in-out duration-500"
              >
                <FaChevronCircleUp size={24} className="text-[#1c1a1a]" />
              </div>
              <div
                onClick={handleNext}
                className="custom-next cursor-pointer translate-x-10 transition-all ease-in-out duration-500"
              >
                <FaChevronCircleDown size={24} className="text-[#1c1a1a]" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LargeNavigation;
