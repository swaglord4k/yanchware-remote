import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City } from "../../models/city.model";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import { getCityDetail } from "../../services/cities.service";
import { RootState } from "../store";

export type CityState = {
  city?: City;
} & Stateful;

const initialState: CityState = {
  city: undefined,
  status: Status.idle,
};

export const getCityAsync = createAsyncThunk(
  "city/fetchCityDetail",
  async ({ cityId }: { cityId: string }) => {
    const response = await getCityDetail(cityId);
    return response;
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCityAsync.pending, (state) => {
        state.status = Status.pending;
      })
      .addCase(getCityAsync.fulfilled, (state, action) => {
        state.status = Status.idle;
        if (action.payload) {
          state.city = action.payload;
        }
      })
      .addCase(getCityAsync.rejected, (state) => {
        state.status = Status.failed;
      });
  },
});

export const selectCityDetail = (state: RootState) => state.city.city;

export const selectCityDetailStatus = (state: RootState) => state.city.status;

export default citySlice.reducer;
