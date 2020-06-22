import {combineReducers, createStore} from "redux";
import postsReducer from "./postsReducer";

let reducers = combineReducers({
    postsState: postsReducer,
})

let store = createStore(reducers);

export default store;