import { map } from 'nanostores'

type GameState = 'LOBBY' | 'STARTING' | 'GET_READY' | 'QUESTION' | 'WAITING' | 'SCORE' | 'END'
export interface GameValue {
  state: GameState,
  score: number
}

export const gameStore = map<GameValue>({
  state: 'LOBBY',
  score: 0
})

export const updateState = (state: GameState) => {
  gameStore.setKey('state', state)
}

export const updateScore = (score: number) => {
  gameStore.setKey('score', score)
}