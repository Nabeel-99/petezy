const SlideWrapper = ({ children }: any) => {
  return (
    <div className=" w-full flex flex-col  md:flex-row md:justify-between text-black mx-auto h-full ">
      {children}
    </div>
  );
};

export default SlideWrapper;
