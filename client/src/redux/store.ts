import { configureStore } from "@reduxjs/toolkit";
import { weatherApiSlice } from "./features/weatherApiSlice";

export const store = configureStore({
	reducer: {
		weatherApiSlice: weatherApiSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
