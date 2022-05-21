import { map } from 'nanostores'

type GameState = 'LOBBY' | 'STARTING' | 'GET_READY' | 'QUESTION' | 'WAITING' | 'SCORE' | 'END'
export interface GameValue {
  state: GameState,
  score: number,
  isLastCorrect: boolean
}

export const gameStore = map<GameValue>({
  state: 'LOBBY',
  score: 0,
  isLastCorrect: false
})

export const updateState = (state: GameState) => {
  gameStore.setKey('state', state)
}

export const updateScore = (score: number) => {
  gameStore.setKey('isLastCorrect', gameStore.get().score !== score)
  gameStore.setKey('score', score)
  gameStore.setKey('state', 'SCORE')
}