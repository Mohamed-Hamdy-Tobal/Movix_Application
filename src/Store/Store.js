import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './Reducers/homeSlice'


export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
})