import { createStore } from 'redux';

const INITIAL = {
  step: 1,
  tipo: 'online'
};

function reducer(state = INITIAL, action) {
  if (action.type === 'SET_STEP_SUN') {
    return {
      ...state, step: action.step,
    }
  } else if (action.type === 'SET_TYPE') {
    return {
      ...state, tipo: action.tipo
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;