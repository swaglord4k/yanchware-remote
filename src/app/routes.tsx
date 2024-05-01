import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { App } from "./app";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
