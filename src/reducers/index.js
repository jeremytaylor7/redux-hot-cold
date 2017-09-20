import * as actions from '../actions';

const initialState = {

  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,

};


export const hotColdReducer = (state = initialState, action) => {
  if (action.type === 'RESET') {
    return Object.assign({}, state, {
      correctAnswer: action.correctAnswer
    })
  }
  else if (action.type === 'GUESS') {
    return Object.assign({}, state, {
      guess: action.guess
    })
  }
}