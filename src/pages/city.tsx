/* eslint-disable react-hooks/exhaustive-deps */
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../components/ui/card";
import { useCityState } from "../hooks/city.hook";

import { CityHeader } from "../components/app/city-header";
import { CoworkingSpaces } from "../components/app/coworking-spaces";
import { IconButton } from "../components/ui/icon-button";
export const City = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { city, status } = useCityState(params.cityId);

  return (
    <main>
      <Card status={status} className="mx-auto max-w-screen-md flex flex-col">
        {city ? (
          <>
            <div className="flex flex-row items-center gap-2 pb-2 bg-white border-b border-gray-100">
              <IconButton onClick={() => navigate(-1)}>
                <MdOutlineKeyboardArrowLeft className="fill-gray-500" />
              </IconButton>
              <CityHeader city={city} withDetails />
            </div>
            <CoworkingSpaces city={city} />
          </>
        ) : (
          <p>No city found</p>
        )}
      </Card>
    </main>
  );
};
