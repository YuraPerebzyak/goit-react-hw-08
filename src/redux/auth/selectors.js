import { authSlice } from "./slice";

export const selectUserData = (state) => state.auth.user;
export const selectUserDataIsLoading = (state) => state.auth.isLoading;
export const selectUserDataError = (state) => state.auth.error;
export const selectUserDataIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDataIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserDataToken = (state) => state.auth.token;

export const authReducer = authSlice.reducer;
