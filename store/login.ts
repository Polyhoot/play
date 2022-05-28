import { map } from 'nanostores'
export interface LoginValue {
  name: string,
  gameId: string
}

export const loginStore = map<LoginValue>({
  name: '',
  gameId: ''
})

export const updateName = (name: string) => {
  loginStore.setKey('name', name)
}

export const updateGameId = (id: string) => {
  loginStore.setKey('gameId', id)
}

export const clearLoginStore = () => {
  loginStore.set({
    name: '',
    gameId: ''
  })
}