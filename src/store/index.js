import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from './userSlice';   

const store = configureStore({
    reducer: {
        // reducer
        user: userSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;