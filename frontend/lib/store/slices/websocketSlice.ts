import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connected: false,
};

export const websocketSlice = createSlice({
    name: "websocket",
    initialState,
    reducers: {},
});

export default websocketSlice.reducer;
