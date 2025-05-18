import { FaCheckCircle } from "react-icons/fa";
import MobileNavigation from "./MobileNavigation";

interface SplashScreenProps {
  title: any;
  description?: string;
  listDetails?: string[];
  text: string;
  slide?: number;
  activeIndex?: number;
  handlePrev?: () => void;
  handleNext?: () => void;
}
const SplashContent = ({
  title,
  description,
  listDetails,
  text,
  slide,
  activeIndex,
  handlePrev,
  handleNext,
}: SplashScreenProps) => {
  return (
    <>
      <div
        className={`flex flex-col h-full md:w-1/2 gap-0 
 ${slide === 1 ? "max-sm:-translate-y-[90px]" : ""}
    ${slide === 2 ? "max-sm:-translate-y-[190px]" : ""}
    ${slide === 3 ? "max-sm:-translate-y-[200px]" : ""}
      ${slide === 4 ? "max-sm:-translate-y-[110px]" : ""}
        ${slide === 5 ? "max-sm:-translate-y-[180px]" : ""} 
  `}
      >
        <MobileNavigation
          activeIndex={activeIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        <div
          className={` bg-white ${
            slide === 1 ? " " : ""
          } flex flex-col items-center gap-8  p-4 md:p-16 max-sm:rounded-b-3xl xl:pt-20 w-full max-sm:justify-around md:justify-between h-full md:rounded-r-3xl`}
        >
          <div className="flex flex-col font-catamaran items-center gap-10">
            <p
              className={` text-center font-bold ${
                slide === 3 || slide === 4 || slide === 5
                  ? "text-3xl leading-10 xl:text-4xl xl:leading-14"
                  : "text-4xl xl:text-6xl xl:leading-20"
              } text-center `}
            >
              {title}
            </p>
            {description && (
              <p className="max-sm:text-sm xl:text-xl">{description}</p>
            )}
          </div>
          {slide === 1 ? (
            <div className=" flex flex-col w-full gap-6">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="px-4 py-3 w-full xl:w-3/4 mx-auto border rounded-xl  bg-white text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 font-bold w-full xl:w-3/4 mx-auto  py-3 rounded-xl text-white"
              >
                Become a Beta Tester
              </button>
            </div>
          ) : (
            <div className=" flex flex-col max-w-md border border-[#dadada] bg-white p-6 rounded-xl shadow-md gap-6">
              {listDetails?.map((item, index) => (
                <ul key={index} className="font-catamaran">
                  <li className="flex items-center text-start gap-4">
                    <span className="text-[#f4a261]">
                      <FaCheckCircle className="text-xl" />
                    </span>
                    <p className="text-md lg:text-lg">{item}</p>
                  </li>
                </ul>
              ))}
            </div>
          )}

          <p className="text-blue-500 font-bold xl:leading-14 text-xl xl:text-4xl">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default SplashContent;
