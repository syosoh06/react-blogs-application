import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/RootReducer/index';

export default (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
}
