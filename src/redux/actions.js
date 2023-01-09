import { INCREMENT, DECREMENT, INPUT_TEXT, CREATE_COMMENT } from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT
  }
}

export function decrementLikes() {
  return {
    type: DECREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}

export function createComment(text, id) {
  return {
    type: CREATE_COMMENT,
    data: {text, id} 
  }
}