import { useRouteError } from "react-router-dom";
import { NavBar } from "../components/app/navbar";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="font-sans text-lg">
      <NavBar />
      <div className="flex flex-col max-w-screen-md justify-center align-middle mx-auto my-4 text-center gap-4">
        <h1 className="font-bold text-5xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{(error as any).statusText || (error as any).message}</i>
        </p>
      </div>
    </div>
  );
};
