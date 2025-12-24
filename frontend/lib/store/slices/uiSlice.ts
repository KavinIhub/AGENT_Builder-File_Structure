import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {},
});

export default uiSlice.reducer;
