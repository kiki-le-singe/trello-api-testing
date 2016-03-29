// http://rackt.github.io/redux/docs/basics/Reducers.html
// https://github.com/rackt/redux/blob/master/examples/todomvc/reducers/index.js

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// combineReducers(reducers): http://rackt.github.io/redux/docs/api/combineReducers.html
const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
