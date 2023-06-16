import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    userRegister: {}
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        signUpAction: (state, action) => {
            state.userRegister = action.payload
        }
    }
});

export const { signUpAction } = userReducer.actions

export default userReducer.reducer


// Async action

export const signUp = () => {
    
}