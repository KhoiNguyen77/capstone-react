import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOGIN, getStoreJson, http } from '../../util/config';
import { customNavigate } from '../..';


const initialState = {
    userRegister: {},
    userLogin: getStoreJson(USER_LOGIN) || null
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        signUpAction: (state, action) => {
            state.userRegister = action.payload
        },
        logInAction: (state, action) => {
            state.userLogin = action.payload
        },
    }
});

export const { signUpAction, logInAction } = userReducer.actions

export default userReducer.reducer


// Async action

export const signUp = (userInfo) => {
    return async dispatch => {
        const res = await http.post('api/Users/signup', userInfo)
        if (res) {
            window.alert("Bạn đã đăng ký tài khoản thành công !")
            const action = signUpAction(userInfo);
            dispatch(action);
        }
    }
}

export const login = (userLogin) => {
    return async dispatch => {
        const res = await http.post('api/Users/signin', userLogin)
        if (res) {
            const action = logInAction(userLogin);
            dispatch(action);
            customNavigate.push('/profile')
        }
    }
}