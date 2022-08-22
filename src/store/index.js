import { createStore, applyMiddleware, combineReducers } from "redux";
import usersReducer from "./reducer/users";
import userReducer from "./reducer/user";
import thunk from "redux-thunk";
import chatStatusReducer from "./reducer/chatStatus";

const rootReducer = combineReducers({
	users: usersReducer,
	user: userReducer,
	chatStatus: chatStatusReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;