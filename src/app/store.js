import { configureStore } from '@reduxjs/toolkit'
import counterRudecer from './app/counterRudecer' 

export const store = configureStore({
  reducer: {
   counter: counterRudecer,
  },
})