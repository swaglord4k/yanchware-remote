import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/cities";
import { City } from "../pages/city";
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
      // {
      //   path: "/my-trips",
      //   element: <MyTrips />,
      // },
      // {
      //   path: "/trips",
      //   element: <Trips />,
      // },
    ],
  },
]);
