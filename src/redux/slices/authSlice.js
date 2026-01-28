import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false, // All declaration state variable and value goes here
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkIsUserLoggedIn: (state) => {
            // If user login, this will store email and token the localstore
            if (localStorage.getItem("user")) {
                state.isLoggedIn = true;
            }
        },
        login: (state, action) => {
            localStorage.setItem("user", action.payload);
            state.isLoggedIn = true;
        },
        logout: (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
        },
    },
});

// Make a transparency function
export const { checkIsUserLoggedIn, logout, login } = authSlice.actions;

// Export as default to store.js
export default authSlice.reducer;