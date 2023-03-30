import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialState {
	season: string;
}

const initialState: initialState = {
	season: "summer", //TODO: set to "" and grab api data first
};

export const weatherApiSlice = createSlice({
	name: "weatherApiSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

// export const {} = weatherApiSlice.actions;

export const selectWeatherApi = (state: RootState) => state.weatherApiSlice;
export default weatherApiSlice.reducer;
