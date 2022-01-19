/**
 * Get the state saved in the local storage (or session storage if the user didn't check the remember me checkbox on connection) 
 * @return  { Object | undefined }
 */
export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      serializedState = sessionStorage.getItem('state');
    }
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};
/**
 * Save the state in the local storage (or session storage if the user didn't check the remember me checkbox on connection) 
 * @param   {Object}  state
 * @return  {void}
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    state.auth.rememberMe
      ? localStorage.setItem('state', serializedState)
      : sessionStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(err);
  }
}