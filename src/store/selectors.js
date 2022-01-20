//Here you'll find all selectors used in the app

export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
export const selectUserFirstName = (state) => state.user.firstName;
export const selectUserLastName = (state) => state.user.lastName;

export const selectAuthLoggedIn = (state) => state.auth.loggedIn;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthToken = (state) => state.auth.token;