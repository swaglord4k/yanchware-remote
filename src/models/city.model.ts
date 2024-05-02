import { Climate } from "./climate.model";
import { CoworkingSpace } from "./coworking-space.model";
import { InternetSpeed } from "./inernet-speed.model";

export type City = {
  cityId: string;
  name: string;
  country: string;
  costOfLivingIndex: number;
  internetSpeed: InternetSpeed;
  coworkingSpaces: CoworkingSpace[];
  safetyIndex: number;
  climate: Climate;
};
