import { Outlet } from "react-router-dom";
import { NavBar } from "../components/ui/navbar";

export const App = () => {
  return (
    <div className="font-sans text-lg">
      <NavBar />
      <Outlet />
    </div>
  );
};
