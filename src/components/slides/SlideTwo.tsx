import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash2 from "../../assets/images/splash2.png";
import { PiPawPrintFill } from "react-icons/pi";
import SlideWrapper from "../SlideWrapper";
import MobileNavigation from "../MobileNavigation";
interface NavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const SlideTwo = ({ activeIndex, handlePrev, handleNext }: NavigationProps) => {
  const splashDetails = [
    "Create detailed profiles for each pet",
    "Store breed, age, weight, and unique features",
    "Add personalized notes for special care needs",
    "Track vaccinations, health history, and medical records",
    "View everything in one simple, organized dashboard",
  ];
  return (
    <SlideWrapper>
      <SplashScreen title="Smart Pet Profiles" image={Splash2} />
      <MobileNavigation
        activeIndex={activeIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <SplashContent
        title={
          <>
            <span className="flex items-start text-center justify-center ">
              {" "}
              <PiPawPrintFill className="text-3xl mt-2 -rotate-10" />
              <PiPawPrintFill className="text-3xl mt-6 mr-2 rotate-45" />
              Pet Info, All In <br />
            </span>
            <span>One Place </span>
          </>
        }
        description="Keep everything about your pets organized and accessible."
        listDetails={splashDetails}
        text="Managing multiple pets has never been this easy."
      />
    </SlideWrapper>
  );
};

export default SlideTwo;
