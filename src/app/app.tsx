import { Outlet } from "react-router-dom";
import { NavBar } from "../components/app/navbar";

export const App = () => {
  return (
    <div className="bg-gradient-to-r min-h-screen from-gray-100 to-gray-300 font-sans text-lg pb-2 max-md:pb-0">
      <NavBar />
      <Outlet />
    </div>
  );
};
