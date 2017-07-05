import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import badGuessesReducer from './badGuessesReducer';
// import wordLettersReducer from './wordLettersReducer';


const rootReducer = combineReducers({
  /*
    badGuesses: badGuessesReducer,
    wordLetters: wordLettersReducer,
  */
    routing: routerReducer // this reducer is used by React Router in Redux
});

export default rootReducer;
