import { INCREMENT, DECREMENT } from "./types";

const initialState = {
  likes: 0
};
// initialState записывается в state хранилища redux после начального запуска приложения, когда автоматически создается 1й action, который называется '@@redux/INITs.h.i.y.w.h', после этого данные приходят в компонент и он перерисовывается
export const likesReducer = (state = initialState, action) => {
  console.log('likesReducer > ', action);
  // внутри reducer фиксируем каждый запуск dispatch
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      }
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1
      }
    default:
      return state  
  }
}