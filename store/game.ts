import { map } from 'nanostores'
export interface GameValue {
  state: 'LOBBY' | 'GET_READY' | 'QUESTION' | 'WAITING' | 'SCORE' | 'END'
}

export const gameStore = map<GameValue>({
  state: 'LOBBY'
})