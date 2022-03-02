import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { UserReducer } from "./UserReducer";

const appReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer
});

//Reset the state if the disconnect action is dispatched
const rootReducer = (state, action) => {
  if (action.type === 'DISCONNECT') localStorage.removeItem('state');
  return appReducer(state, action)
}

export default rootReducer;
