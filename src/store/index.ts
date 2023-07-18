import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './Reducer';


const store = createStore(messageReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch
export default store;