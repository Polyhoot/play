import { atom } from "nanostores";

export const timerStore = atom<number>(0)

export const updateTimer = () => {
  timerStore.set(timerStore.get() - 1)
}

export const resetTimer = (time: number) => {
  timerStore.set(time)
}