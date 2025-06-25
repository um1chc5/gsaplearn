import { createStore } from 'zustand'

export interface SampleStore {
  state: string
  updateState: (state: string) => void
}

export const useSampleStore = createStore<SampleStore>((set) => ({
  state: '',
  updateState: (state: string) => set(() => ({ state }))
}))
