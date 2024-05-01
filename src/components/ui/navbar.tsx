import { NavigationLink } from "./nav-link";
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 flex justify-between flex-wrap shadow-sm shadow-current bg-gradient-to-r from-primary to-primaryDark">
      <img
        src={logo}
        className="h-10 mx-4 my-4 hover:cursor-pointer"
        alt="YanchWire logo"
        onClick={() => navigate("/")}
      />
      <nav className="my-auto mx-4 items-center">
        <NavigationLink to={"/"}>Home</NavigationLink>
      </nav>
    </header>
  );
};
