import { createStore, applyMiddleware, combineReducers } from "redux";
import usersReducer from "./reducer/users";
import userReducer from "./reducer/user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: usersReducer,
	user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;