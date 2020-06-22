import {combineReducers, createStore} from "redux";
import postsRecucer from './postsReducer'

let reducers = combineReducers({
    posts: postsReducer
});

let store = createStore(reducers)

export default store;