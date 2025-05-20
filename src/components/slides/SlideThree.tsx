import SplashScreen from "../SplashScreen";
import SplashContent from "../SplashContent";
import Splash3 from "../../assets/images/splash3.png";
import Splash3Mobile from "../../assets/images/splash3mobile.png";
import SlideWrapper from "../SlideWrapper";

interface NavigationProps {
  activeIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}
const SlideThree = ({
  activeIndex,
  handlePrev,
  handleNext,
}: NavigationProps) => {
  const splashDetails = [
    "Get smart alerts for feeding, medication, vet visits, pet-sitting, and more",
    "Customize reminders for each pet’s unique schedule",
    "Set it and forget it—Petezy handles the follow-ups",
    "Keep everything on track with your personal pet assistant",
  ];
  return (
    <SlideWrapper>
      <SplashScreen
        title="⏰ Reminders That Actually Remind"
        image={Splash3}
        imageMobile={Splash3Mobile}
      />
      <SplashContent
        title={
          <>
            <span className=" text-center   ">
              Stay On Top Of Your <br className="max-sm:hidden" />
              Pet's Daily Needs- <br className="max-sm:hidden" />
              Without The Stress.
            </span>
          </>
        }
        activeIndex={activeIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        slide={3}
        listDetails={splashDetails}
        text="No More Missed Meds Or Late Meals."
      />
    </SlideWrapper>
  );
};

export default SlideThree;
