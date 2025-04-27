import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="border-b  z-40 bg-gradient-to-b from-[#1212127e]  to-[#78787856] lg:top-0 border-b-[#D9D9D9] py-4 lg:py-6  backdrop-blur-xl flex w-full items-center justify-center">
      <img
        src={Logo}
        alt="logo"
        className="max-sm:w-full object-contain max-sm:h-12"
      />
    </nav>
  );
};

export default Navbar;
