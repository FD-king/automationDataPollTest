import navBarLogo from "../assets/logo-text.png";
const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white grid grid-cols-3 gap-20 items-center py-3">
      <div>
        <img src={navBarLogo} alt="" />
      </div>
      <div className="flex gap-7.25">
        <a className="text-[#DB2777]" href="">
          Home
        </a>
        <a className="text-[#475569]" href="">
          Technologies
        </a>
        <a className="text-[#475569]" href="">
          Projects
        </a>
        <a className="text-[#475569]" href="">
          About
        </a>
        <a className="text-[#475569]" href="">
          Contact
        </a>
      </div>
      <div className="flex justify-end items-center">
        <a className="text-[#334155] mr-5" href="">
          Sign In
        </a>
        <button className="btn btn-active px-5 bg-[#D91B7E] rounded-full border-0">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
