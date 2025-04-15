import counterReducer from "../reducers/counterReducer";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{
        counterReducer:counterReducer
    }
})