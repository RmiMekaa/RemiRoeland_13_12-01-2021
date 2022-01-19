import { createStore } from 'redux'
import { saveState } from './localStorage'
import { loadState } from './localStorage'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash.throttle'
import rootReducer from './reducers'

//Persisted State stored in the local storage
const persistedState = loadState();

//Store creation
const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))

//Save the state in the local storage whenever there is a change. Throttle method prevent the function to be called more than once per second
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;