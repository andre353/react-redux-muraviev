import { INPUT_TEXT } from "./types";

const initialState = {
  text: ''
};
// initialState записывается в state хранилища redux после начального запуска приложения, когда автоматически создается 1й action, который называется '@@redux/INITs.h.i.y.w.h', после этого данные приходят в компонент и он перерисовывается
export const inputReducer = (state = initialState, action) => {
  console.log('inputReducer > ', action);
  // внутри reducer фиксируем каждый запуск dispatch
  switch(action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state  
  }
}