import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash4 from "../../assets/images/splash4.png";
import SlideWrapper from "../SlideWrapper";
import MobileNavigation from "../MobileNavigation";

interface NavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const SlideFour = ({
  activeIndex,
  handlePrev,
  handleNext,
}: NavigationProps) => {
  const splashDetails = [
    "Log daily activities like walks, meals, playtime, and rest",
    "Customize logs to match your pet’s unique lifestyle",
    "Spot behavior patterns and track changes over time",
    "Use insights to stay proactive about their health",
  ];
  return (
    <SlideWrapper>
      <SplashScreen title="📅 Everyday Tracking Made Easy" image={Splash4} />
      <MobileNavigation
        activeIndex={activeIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <SplashContent
        title={
          <>
            <span className=" text-center   ">
              Stay Connected To Your <br /> Pet’s Daily Rhythm And <br />{" "}
              Well-being.
            </span>
          </>
        }
        slide={3}
        listDetails={splashDetails}
        text="Turn everyday routines into smarter pet care decisions."
      />
    </SlideWrapper>
  );
};

export default SlideFour;
