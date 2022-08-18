import { createStore, applyMiddleware, combineReducers } from "redux";
import usersReducer from "./reducer/users";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;