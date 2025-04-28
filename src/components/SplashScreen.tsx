interface SplashScreenProps {
  title: string;
  image: string;
}
const SplashScreen = ({ title, image }: SplashScreenProps) => {
  return (
    <div className="flex   bg-white max-md:rounded-t-3xl md:rounded-l-3xl flex-col gap-10 md:w-1/2 px-6 pt-10 xl:pt-20 h- items-center  xl:gap-14 xl:overflow-hidden">
      <h1 className="text-3xl  xl:text-5xl xl:leading-14 font-bold">{title}</h1>
      <img
        src={image}
        alt=""
        className=" xl:h-full   mx-auto w-full xl:px-10 object-contain"
      />
    </div>
  );
};

export default SplashScreen;
