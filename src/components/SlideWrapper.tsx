const SlideWrapper = ({ children }: any) => {
  return (
    <div className="relative  h-full w-full flex flex-col  md:flex-row md:justify-between text-black mx-auto  ">
      {children}
    </div>
  );
};

export default SlideWrapper;
