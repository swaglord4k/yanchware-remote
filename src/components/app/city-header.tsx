import {
  FaCity,
  FaCloudRain,
  FaDownload,
  FaRegMoneyBillAlt,
  FaTemperatureHigh,
  FaUpload,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { City } from "../../models/city.model";
import { InfoGroup } from "../ui/info-group";

export type CityHeaderProps = {
  city: City;
  withDetails?: boolean;
};

export const CityHeader = ({ city, withDetails = false }: CityHeaderProps) => (
  <div className="flex flex-row w-full flex-wrap items-center justify-between">
    <div className="flex flex-row items-center gap-2">
      <FaCity className="fill-gray-500" />
      <div>
        <p className="font-semibold">{city.name}</p>
        <p className="font-light text-xs">{city.country}</p>
      </div>
    </div>
    {withDetails && (
      <div className="flex flex-row flex-wrap gap-5 items-center">
        <InfoGroup
          infos={[
            {
              info: `${city?.internetSpeed?.download} Mbps`,
              label: "Download Speed",
              icon: <FaDownload className="fill-gray-500" />,
            },
            {
              info: `${city?.internetSpeed?.upload} Mbps`,
              label: "Upload Speed",
              icon: <FaUpload className="fill-gray-500" />,
            },
          ]}
        />
        <InfoGroup
          infos={[
            {
              info: `${city?.climate?.averageTemperature} Celsius`,
              label: "Avg. Temperature",
              icon: <FaTemperatureHigh className="fill-gray-500" />,
            },
            {
              info: `${city?.climate?.rainfall} mm`,
              label: "Rainfall",
              icon: <FaCloudRain className="fill-gray-500" />,
            },
          ]}
        />
        <InfoGroup
          infos={[
            {
              info: `${city?.costOfLivingIndex}`,
              label: "Cost of Living",
              icon: <FaRegMoneyBillAlt className="fill-gray-500" />,
            },
            {
              info: `${city?.safetyIndex}`,
              label: "Safety Index",
              icon: <MdOutlineSecurity className="fill-gray-500" />,
            },
          ]}
        />
      </div>
    )}
  </div>
);
