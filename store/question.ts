import { map } from 'nanostores'
import { gameStore, updateState } from './game'

type GameState = 'LOBBY' | 'STARTING' | 'GET_READY' | 'QUESTION' | 'WAITING' | 'SCORE' | 'END'
export interface QuestionValue {
  number: number
  duration: number,
  text: string,
  socket: WebSocket | null,
}

export const questionStore = map<QuestionValue>({
  number: 0,
  duration: 0,
  text: '',
  socket: null
})

export const nextQuestion = (duration: number, text: string) => {
  questionStore.setKey('duration', duration)
  questionStore.setKey('text', text)
  questionStore.setKey('number', questionStore.get().number + 1)
  updateState('QUESTION')
}

export const setSocket = (socket: WebSocket) => {
  questionStore.setKey('socket', socket)
}