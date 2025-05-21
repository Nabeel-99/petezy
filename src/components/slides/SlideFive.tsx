import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash5 from "../../assets/images/splash5.svg";
import Splash5Mobile from "../../assets/images/splash5mobile.svg";
import SlideWrapper from "../SlideWrapper";

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
      <SplashScreen
        title="📲 Book with a Tap"
        image={Splash5}
        imageMobile={Splash5Mobile}
      />

      <SplashContent
        title={
          <>
            <span className=" text-center   ">
              Easily Find And Book <br className="max-sm:hidden" />
              Trusted Pet-Care <br className="max-sm:hidden" />
              Services In Seconds.
            </span>
          </>
        }
        activeIndex={activeIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        slide={5}
        listDetails={splashDetails}
        text="Petezy makes pet-care scheduling effortless."
      />
    </SlideWrapper>
  );
};

export default SlideFive;
