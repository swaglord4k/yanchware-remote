import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { App } from "./app";
import { MyTrips } from "../pages/my-trips";
import { Trips } from "../pages/trips";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/my-trips",
        element: <MyTrips />,
      },
      {
        path: "/trips",
        element: <Trips />,
      },
    ],
  },
]);
