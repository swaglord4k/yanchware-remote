import { NavigationLink } from "./nav-link";
import logo from "../logo.svg";

export const NavBar = () => (
  <header className="flex justify-between shadow-sm shadow-current bg-gradient-to-r from-primary to-primaryDark">
    <img src={logo} className="h-10 mx-4 my-4" alt="YanchWire logo" />
    <nav className="my-auto mx-4">
      <NavigationLink to={"/"}>Home</NavigationLink>
      <NavigationLink to={"/my-trips"}>My Trips</NavigationLink>
      <NavigationLink to={"/trips"}>Trips</NavigationLink>
    </nav>
  </header>
);
