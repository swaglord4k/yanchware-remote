import axios from "axios";
import { City } from "../models/city.model";
import { delay } from "../utils/mock.util";

const citiesApi = axios.create({
  baseURL: "http://localhost:3500",
});

const citiesEndpoint = "/cities";

export type CitiesPayload = {
  count: number;
  cities: City[];
};

// https://api.example.com/v1/cities with limit and offset
export const getCities = async (
  limit: number,
  offset: number
): Promise<CitiesPayload> => {
  await delay();
  const response = await citiesApi.get<{ data: City[]; items: number }>(
    `${citiesEndpoint}`,
    {
      params: {
        _per_page: limit,
        _page: offset,
      },
    }
  );
  return {
    count: response?.data?.items,
    cities: response?.data?.data,
  };
};
// https://api.example.com/v1/cities/{cityId}
export const getCityDetail = async (cityId: string): Promise<City> => {
  await delay();
  const response = await citiesApi.get<City[]>(
    `${citiesEndpoint}?cityId=${cityId}`
  );
  return response?.data?.[0];
};

// OLD CODE ONLY FOR INFO

// https://api.example.com/v1/cities
// export const getCities = async (limit: number, offset: number) => {
//   const cities = (await mockApiCall<City[]>(CITIES)).map(
//     (cityDetail) =>
//       ({
//         cityId: cityDetail.cityId,
//         country: cityDetail.country,
//         name: cityDetail.name,
//       } as City)
//   );
//   const start = offset * limit;
//   const end = offset * limit + limit;
//   let citiesSlice: City[];
//   if (start < CITIES.length && end < CITIES.length) {
//     citiesSlice = cities.slice(start, end);
//   } else if (start < CITIES.length && end > CITIES.length) {
//     citiesSlice = cities.slice(start);
//   } else {
//     citiesSlice = [];
//   }
//   return {
//     count: CITIES.length,
//     cities: citiesSlice,
//   };
// };

// https://api.example.com/v1/cities/{cityId}
// export const getCityDetail = async (cityId: string) => {
//   const cities = await mockApiCall<CityDetail[]>(CITIES);
//   return cities.find((c) => c.cityId === cityId);
// };
