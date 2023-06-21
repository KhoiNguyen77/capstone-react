import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../util/config';


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

export const signUp = (userInfo) => {
    return async dispatch => {
        const res = await http.post('api/Users/signup')
        if (res) {
            const action = signUpAction(userInfo);
            dispatch(action);
        }
    }
}