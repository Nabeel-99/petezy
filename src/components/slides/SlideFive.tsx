import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash5 from "../../assets/images/splash5.png";
import SlideWrapper from "../SlideWrapper";
import MobileNavigation from "../MobileNavigation";

interface NavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const SlideFive = ({
  activeIndex,
  handlePrev,
  handleNext,
}: NavigationProps) => {
  const splashDetails = [
    "Connect with vets, sitters, groomers, foster homes, and more",
    "View real-time availability and compare service options",
    "Book appointments directly from your phone",
    "Perfect for both routine care and last-minute needs",
  ];
  return (
    <SlideWrapper>
      <SplashScreen title="📲 Book with a Tap" image={Splash5} />
      <MobileNavigation
        activeIndex={activeIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <SplashContent
        title={
          <>
            <span className=" text-center   ">
              Easily Find And Book <br />
              Trusted Pet-Care <br />
              Services In Seconds.
            </span>
          </>
        }
        slide={3}
        listDetails={splashDetails}
        text="Petezy makes pet-care scheduling effortless."
      />
    </SlideWrapper>
  );
};

export default SlideFive;
