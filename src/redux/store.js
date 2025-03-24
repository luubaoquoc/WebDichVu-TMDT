import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSlide'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})