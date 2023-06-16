import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { USER_LOGIN } from '../util/config';
import { getProfileAction, logInAction } from '../Redux/Reducer/userReducer';
const Header = () => {
    const dispatch = useDispatch();
    const { userProfile } = useSelector(state => state.userReducer)
    const getProfileLink = () => {
        if (userProfile == null) {
            return null
        } else {
            return <Avatar
                size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 70,
                    xxl: 75,
                }}
                src={userProfile.avatar}
            />

        }
    }
    const getLink = (route) => {
        if (userProfile == null) {
            // eslint-disable-next-line default-case
            switch (route) {
                case "/register": {
                    return <NavLink className="nav-link" to="/register">Register</NavLink>
                }
                case "/login": {
                    return <NavLink className="nav-link" to="/login">Login</NavLink>
                }
            }
        } else {
            return null
        }

    }
    const items = [
        {
            label: <NavLink className="nav-link mt-2" to="/profile">Profile</NavLink>,
            key: '0',
            icon: <UserOutlined />
        },
        {
            label: <NavLink className="nav-link mt-2" to="/order">Your Order</NavLink>,
            key: '2',
        },
        {
            label: <NavLink className="nav-link mt-2" to="/update">Update Your Profile</NavLink>,
            key: '3',
        },
        {
            type: 'divider',
        },
        {
            label: <NavLink className="nav-link mt-2" to="/login" onClick={() => {
                signOut()
            }}>Sign Out</NavLink>,
            key: '4',
        },

    ]
    const signOut = () => {
        localStorage.removeItem(USER_LOGIN);
        const clearUser = logInAction(null)
        const clearProfile = getProfileAction(null);
        dispatch(clearProfile, clearUser)
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand p-3" to="/">
                <img src='./images/logo.png' alt='logo' width={70}></img>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse justify-content-between px-3" id="collapsibleNavId">
                <div className="left-menu">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            {getLink("/register")}
                        </li>
                        <li className="nav-item">
                            {getLink('/login')}
                        </li>
                    </ul>
                </div>
                <div className="right-menu">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Dropdown menu={{ items }} >
                                <a onClick={(e) => e.preventDefault()}>
                                    {getProfileLink()}
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header