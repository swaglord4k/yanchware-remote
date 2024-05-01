import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export const App = () => {
  return (
    <div className="font-sans text-lg">
      <NavBar />
      <Outlet />
    </div>
  );
};
