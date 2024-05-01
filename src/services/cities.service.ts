import { CITIES } from "../mocks/cities.mock";
import { CityDetail } from "../models/city-detail.model";
import { City } from "../models/city.model";
import { mockApiCall } from "../utils/mock.util";

export type CitiesPayload = {
  count: number;
  cities: City[];
};

// https://api.example.com/v1/cities
export const getCities = async (limit: number, offset: number) => {
  const cities = (await mockApiCall<City[]>(CITIES)).map(
    (cityDetail) =>
      ({
        cityId: cityDetail.cityId,
        country: cityDetail.country,
        name: cityDetail.name,
      } as City)
  );
  const start = offset * limit;
  const end = offset * limit + limit;
  let citiesSlice: City[];
  if (start < CITIES.length && end < CITIES.length) {
    citiesSlice = cities.slice(start, end);
  } else if (start < CITIES.length && end > CITIES.length) {
    citiesSlice = cities.slice(start);
  } else {
    citiesSlice = [];
  }
  return {
    count: CITIES.length,
    cities: citiesSlice,
  };
};

// https://api.example.com/v1/cities/{cityId}
export const getCityDetail = async (cityId: string) => {
  const cities = await mockApiCall<CityDetail[]>(CITIES);
  return cities.find((c) => c.cityId === cityId);
};
