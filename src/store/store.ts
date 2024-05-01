import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cities from "./slices/cities.slice";
import city from "./slices/city.slice";

export const store = configureStore({
  reducer: {
    cities,
    city,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
