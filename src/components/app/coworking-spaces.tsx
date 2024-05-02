import { FaRoad, FaStar } from "react-icons/fa6";
import { InfoLine } from "../ui/info-line";
import { City } from "../../models/city.model";

export type CoworkingSpacesProps = {
  city: City;
};

export const CoworkingSpaces = ({ city }: CoworkingSpacesProps) => (
  <>
    <p className="text-center overflow-scroll">Coworking Spaces</p>
    {city?.coworkingSpaces?.map((space, i) => (
      <div
        className="flex flex-1 flex-row flex-wrap gap-4 items-center justify-between hover:bg-slate-50 rounded px-4"
        key={`${space.name}${space.address}_${i}`}
      >
        <div>
          <p className="text-center">{space.name}</p>
          <InfoLine
            className="mx-auto"
            info={space.address}
            label="Address"
            icon={<FaRoad className="fill-gray-500" />}
          />
        </div>
        <InfoLine
          label="Rating"
          icon={
            <>
              {Array.from({ length: space.rating || 0 }, (_, i) => i + 1).map(
                (_, i) => (
                  <FaStar key={`star-${i}`} className="fill-yellow-400" />
                )
              )}
            </>
          }
        />
      </div>
    ))}
  </>
);
