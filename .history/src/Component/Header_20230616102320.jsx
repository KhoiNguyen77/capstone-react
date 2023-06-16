import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Header = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    const getProfileLink = () => {
        if (userProfile == null) {
            return null
        } else {
            return <NavLink className="nav-link" to="/profile">
                <Avatar
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
            </NavLink>
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
                            {getProfileLink()}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header