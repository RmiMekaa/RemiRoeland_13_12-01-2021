import { configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from './reducers/AuthReducer'
import { UserReducer } from './reducers/UserReducer'
import { saveState } from './localStorage'

//Store creation
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
})

//Save the store in the local storage whenever there is a change
store.subscribe(() => {
  saveState(store.getState());
})

export default store;