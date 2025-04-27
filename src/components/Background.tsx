import BgImg from "../assets/images/bg.png";
import BgMobile from "../assets/images/mobilebg.png";
const Background = () => {
  return (
    <>
      <div className="max-sm:hidden absolute -z-10 overflow-hidden inset-0 w-full h-full">
        <img src={BgImg} alt="" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-60 h-full  w-full" />
      </div>
      <div className="absolute sm:hidden -z-10 overflow-hidden inset-0 w-full h-full">
        <img src={BgMobile} alt="" className="w-full" />
        <div className="absolute inset-0 bg-black opacity-60 h-full  w-full" />
      </div>
    </>
  );
};

export default Background;
