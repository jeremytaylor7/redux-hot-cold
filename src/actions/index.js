export const GUESS = 'GUESS'
export const guess = guess => ({
  type: GUESS,
  guess: guess
})

export const RESET = 'RESET'
export const reset = () => ({
  type: RESET,
  correctAnswer: Math.floor(Math.random() * 100) + 1
})
//actions guesses/reset
//look