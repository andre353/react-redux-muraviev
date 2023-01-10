import { CREATE_COMMENT, UPDATE_COMMENT } from "./types";

const initialState = {
  comments: []
};
// initialState записывается в state хранилища redux после начального запуска приложения, когда автоматически создается 1й action, который называется '@@redux/INITs.h.i.y.w.h', после этого данные приходят в компонент и он перерисовывается
export const commentsReducer = (state = initialState, action) => {
  console.log('commentsReducer > ', action);
  // внутри reducer фиксируем каждый запуск dispatch
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.data]
      }
    case UPDATE_COMMENT:
      const itemIndex = state.comments.findIndex(comment => comment.id === action.data.id);
      const nextComments = [
        ...state.comments.slice(0, itemIndex),
        action.data,
        ...state.comments.slice(itemIndex + 1)
      ]
      return {
        ...state,
        comments: nextComments
      }
    default:
      return state  
  }
}