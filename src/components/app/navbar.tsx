import { NavigationLink } from "../ui/nav-link";
import logo from "../../logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const isHomepage = pathname === "/";
  return (
    <header className="sticky top-0 flex justify-between flex-wrap shadow-sm shadow-current bg-gradient-to-r from-primary to-primaryDark h-20">
      <div className="flex flex-row items-center">
        <img
          src={logo}
          className={`h-8 mx-4 my-4 max-md:hidden ${
            !isHomepage ? "hover:cursor-pointer" : ""
          }`}
          alt="YanchWire logo"
          onClick={() => {
            if (!isHomepage) {
              navigate("/");
            }
          }}
        />
        <div className="bg-white w-1 h-12 rounded max-md:hidden"></div>
        <p className="text-white text-2xl ml-2 font-medium">Trips</p>
      </div>
      <nav className="my-auto mx-4 items-center">
        <NavigationLink to={"/"}>Home</NavigationLink>
      </nav>
    </header>
  );
};
