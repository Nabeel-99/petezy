import Splash from "./Splash";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col item-center gap-0 xl:gap-40 w-full h-full px-4 mt-20 xl:mt-30 z-30 text-white">
        <div className="w-full xl:max-w-2xl border mx-auto flex flex-col h-full  gap-10">
          <h1 className="px-4 py-3 rounded-full border max-sm:w-full mx-auto font-catamaran font-bold text-sm xl:text-xl bg-[#092f55] text-white">
            The Ultimate Pet Care Experience: Coming Soon
          </h1>
          <p className="text-5xl font-nunito  leading-14 xl:text-8xl font-black  xl:leading-28">
            Something <br /> Pawsome is <br />{" "}
            <span className="text-blue-500">Coming</span>
          </p>
          <p className="text-xl xl:text-2xl font-catamaran">
            Petezy is the future of pet care — from adoption{" "}
            <br className="max-sm:hidden" />
            to pet sitting, all in one loving community.
          </p>
          <div className="mx-auto">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Yourname@Email.com"
                className="px-4 py-4 focus:outline-none max-sm:py-3 xl:w-96 rounded-l-xl bg-white text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 h-full max-sm:h-12 text-center flex items-center  rounded-r-xl py-4 px-6 text-white"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        <Splash />
      </div>
    </>
  );
};

export default Hero;
