interface SplashScreenProps {
  title: string;
  image: string;
  imageMobile: string;
  slide?: number;
}
const SplashScreen = ({ title, image, imageMobile }: SplashScreenProps) => {
  return (
    <div className="flex  max-md:rounded-t-3xl md:rounded-l-3xl flex-col gap-10 md:w-1/2 px-6 pt-10 xl:pt-20  items-center  xl:gap-14 xl:overflow-hidden">
      <h1 className="text-3xl  xl:text-5xl  mx-auto text-center   xl:leading-14 font-bold">
        {title}
      </h1>
      <img
        src={image}
        alt=""
        className=" xl:h-full hidden md:flex   mx-auto w-full xl:px-10 object-contain"
      />
      <div className="w-[319px]  h-full px-4 md:hidden ">
        <img
          src={imageMobile}
          alt=""
          className={`  w-full h-full  object-contain`}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
