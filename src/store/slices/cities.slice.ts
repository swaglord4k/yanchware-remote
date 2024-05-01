import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City } from "../../models/city.model";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import { getCities, getCityDetail } from "../../services/cities.service";
import { RootState } from "../store";

export type CitiesState = {
  cities: City[];
  limit: number;
  offset: number;
  count: number;
} & Stateful;

const initialState: CitiesState = {
  cities: [],
  limit: 20,
  offset: 0,
  count: 0,
  status: Status.idle,
};

export const getCitiesAsync = createAsyncThunk(
  "cities/fetchCities",
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const response = await getCities(limit, offset);
    return response;
  }
);

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.offset = 0;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCitiesAsync.pending, (state) => {
        state.status = Status.pending;
      })
      .addCase(getCitiesAsync.fulfilled, (state, action) => {
        state.status = Status.idle;
        state.cities = action.payload.cities;
        state.count = action.payload.count;
      })
      .addCase(getCitiesAsync.rejected, (state) => {
        state.status = Status.failed;
      });
  },
});

export const selectCitiesList = (state: RootState) => state.cities.cities;

export const selectCitiesLimit = (state: RootState) => state.cities.limit;

export const selectCitiesOffset = (state: RootState) => state.cities.offset;

export const selectCitiesStatus = (state: RootState) => state.cities.status;

export const selectCitiesCount = (state: RootState) => state.cities.count;

export const { setLimit, setOffset } = citiesSlice.actions;

export default citiesSlice.reducer;
