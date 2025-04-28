import { FaCheckCircle } from "react-icons/fa";

interface SplashScreenProps {
  title: any;
  description?: string;
  listDetails?: string[];
  text: string;
  slide?: number;
}
const SplashContent = ({
  title,
  description,
  listDetails,
  text,
  slide,
}: SplashScreenProps) => {
  return (
    <div
      className={`flex bg-white max-sm:-translate-y-[120px]  max-sm:pb-20 max-md:rounded-b-3xl md:rounded-r-3xl flex-col max-sm:justify-around md:justify-between gap-10 p-4 max-sm:pt-32 md:p-12 xl:pt-20  w-full md:w-1/2 h-full items-center`}
    >
      <div className="flex flex-col items-center gap-10">
        <p
          className={` font-bold ${
            slide === 3
              ? "text-3xl leading-10 xl:text-4xl xl:leading-14"
              : "text-4xl xl:text-6xl xl:leading-20"
          } text-center `}
        >
          {title}
        </p>
        <p className="max-sm:text-base xl:text-xl">{description}</p>
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
            className="bg-blue-500 w-full xl:w-3/4 mx-auto  py-3 rounded-xl text-white"
          >
            Become a Beta Tester
          </button>
        </div>
      ) : (
        <div className=" flex flex-col max-w-md border border-[#dadada] bg-white p-6 rounded-xl shadow-md gap-6">
          {listDetails?.map((item, index) => (
            <ul key={index}>
              <li className="flex items-center text-start gap-4">
                <span className="text-[#f4a261]">
                  <FaCheckCircle className="text-xl" />
                </span>
                <p className="text-lg">{item}</p>
              </li>
            </ul>
          ))}
        </div>
      )}

      <p className="text-blue-500 font-bold xl:leading-14 text-2xl xl:text-4xl">
        {text}
      </p>
    </div>
  );
};

export default SplashContent;
