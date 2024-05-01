import { City } from "./city.model";
import { Climate } from "./climate.model";
import { CoworkingSpace } from "./coworking-space.model";
import { InternetSpeed } from "./inernet-speed.model";

export type CityDetail = {
  costOfLivingIndex: number;
  internetSpeed: InternetSpeed;
  coworkingSpaces: CoworkingSpace[];
  safetyIndex: number;
  climate: Climate;
} & City;
