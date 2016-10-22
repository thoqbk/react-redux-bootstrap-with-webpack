import {combineReducers, createStore, applyMiddleware} from 'redux';
import currentUserReducer from './reducer/currentUser.js';
import startRealtimeConnection, {middleware} from "./realtime";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

let store = createStore(rootReducer, applyMiddleware(middleware), applyMiddleware(thunk));

startRealtimeConnection(store);

export default store;
