import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash1 from "../../assets/images/splash1.png";
import { PiPawPrintFill } from "react-icons/pi";
import SlideWrapper from "../SlideWrapper";

interface NavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const SlideOne = ({ activeIndex, handlePrev, handleNext }: NavigationProps) => {
  return (
    <SlideWrapper>
      <SplashScreen title="Meet Petezy" image={Splash1} />
      <SplashContent
        title={
          <>
            <span className="flex items-start text-center justify-center ">
              {" "}
              <PiPawPrintFill className="text-lg xl:text-3xl xl:mt-2 -rotate-10" />
              <PiPawPrintFill className="text-lg xl:text-3xl mt-3 xl:mt-6 mr-2 rotate-45" />
              Become A <br />
            </span>
            <span> Petezy Beta Tester </span>
          </>
        }
        activeIndex={activeIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        description=" 💬 Get early access, exclusive perks, and be part of a pet-loving community building the next big thing for pets and sitters."
        slide={1}
        text="We’ll reach out soon! Only real pet lovers allowed 😻🐶"
      />
    </SlideWrapper>
  );
};

export default SlideOne;
