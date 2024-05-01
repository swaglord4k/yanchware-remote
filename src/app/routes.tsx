import { createBrowserRouter } from "react-router-dom";
import { City } from "../pages/city";
import { Home } from "../pages/cities";
import { MyTrips } from "../pages/my-trips";
import { Trips } from "../pages/trips";
import { App } from "./app";
import { ErrorPage } from "./error";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/city/:cityId",
        element: <City />,
      },
      // possible pages to add in the future
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
