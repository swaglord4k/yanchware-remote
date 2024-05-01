/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getCityAsync,
  selectCityDetail,
  selectCityDetailStatus,
} from "../store/slices/city.slice";

export const useCityState = (cityId?: string) => {
  const city = useAppSelector(selectCityDetail);
  const status = useAppSelector(selectCityDetailStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cityId) {
      dispatch(getCityAsync({ cityId }));
    }
  }, [cityId]);

  return { city, status };
};
