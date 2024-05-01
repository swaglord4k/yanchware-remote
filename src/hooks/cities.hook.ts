/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getCitiesAsync,
  selectCitiesCount,
  selectCitiesLimit,
  selectCitiesList,
  selectCitiesOffset,
  selectCitiesStatus,
} from "../store/slices/cities.slice";

export const useCitiesState = () => {
  const cities = useAppSelector(selectCitiesList);
  const limit = useAppSelector(selectCitiesLimit);
  const offset = useAppSelector(selectCitiesOffset);
  const status = useAppSelector(selectCitiesStatus);
  const count = useAppSelector(selectCitiesCount);
  const dispatch = useAppDispatch();

  // component mounted
  useEffect(() => {
    dispatch(getCitiesAsync({ limit, offset }));
  }, []);

  // dependencies change
  useEffect(() => {
    dispatch(getCitiesAsync({ limit, offset }));
  }, [limit, offset]);

  return { cities, limit, offset, status, count };
};
