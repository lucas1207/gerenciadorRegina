import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


const initialState = {
  // --------------SLIDER-----------------
  squarePage: 1,
  effect: false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // --------------SLIDER-----------------
    case 'setSquarePage':
      return { ...state, squarePage: action.value };

      case 'setEffect':
        return { ...state, effect: action.value };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };
