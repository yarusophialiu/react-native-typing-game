import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import stepReducer from './stepReducer';
// import wordReducer from './wordReducer';


const rootReducer = combineReducers({
  /*
    step: stepReducer,
    word: wordReducer,
  */
    routing: routing
});

export default rootReducer;
