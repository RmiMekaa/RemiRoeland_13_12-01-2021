/**
 * Get the state from the local storage
 *
 * @return  {Object}  state from the local storage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
};

/**
 * Save the state in the local storage
 *
 * @param   {Object}  state
 *
 * @return  {void}
 */
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(err);
  }
}