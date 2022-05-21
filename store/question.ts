import { map } from 'nanostores'

type GameState = 'LOBBY' | 'STARTING' | 'GET_READY' | 'QUESTION' | 'WAITING' | 'SCORE' | 'END'
export interface GameValue {
  number: number
  duration: number,
  text: string,
  socket: WebSocket | null,
}

export const gameStore = map<GameValue>({
  number: 0,
  duration: 0,
  text: '',
  socket: null
})

export const nextQuestion = (duration: number, text: string) => {
  gameStore.setKey('duration', duration)
  gameStore.setKey('text', text)
  gameStore.setKey('number', gameStore.get().number + 1)
}