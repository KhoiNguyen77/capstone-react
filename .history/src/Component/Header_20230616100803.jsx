import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Header = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    const getNavLink = () => {
        if (userProfile == {}) {
            return null
        } else {
            return <NavLink className="nav-link" to="/profile">
                <Avatar
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 75,
                    }}
                    src={userProfile.avatar}
                />
            </NavLink>
        }
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand p-3" to="/">
                <img src='./images/image 3.png' alt='logo'></img>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse justify-content-between px-3" id="collapsibleNavId">
                <div className="left-menu">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="right-menu">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            {getNavLink()}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header