import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./usersReducer";
import groupsReducer from "./groupsReducers";


let rootReducer = combineReducers({
    UsersPage: usersReducer,
    GroupsPage: groupsReducer,
})


const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store