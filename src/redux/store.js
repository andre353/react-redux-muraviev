import {createStore} from 'redux';

const initialState = {
  likes: 10
};
// initialState записывается в state хранилища redux после начального запуска приложения, когда автоматически создается 1й action, который называется '@@redux/INITs.h.i.y.w.h', после этого данные приходят в компонент и он перерисовывается
const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  // внутри reducer фиксируем каждый запуск dispatch
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        likes: state.likes + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        likes: state.likes - 1
      }
    default:
      return state  
  }
};

const store = createStore(reducer);

export default store;