//Here you'll find all selectors used in the app

// //User Slice
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
export const selectEditError = (state) => state.user.editError;
export const selectDisplayEditForm = (state) => state.user.displayEditForm;
export const selectUserFirstName = (state) => state.user.firstName;
export const selectUserLastName = (state) => state.user.lastName;

// //Auth Slice
export const selectAuthLoggedIn = (state) => state.auth.loggedIn;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthToken = (state) => state.auth.token;