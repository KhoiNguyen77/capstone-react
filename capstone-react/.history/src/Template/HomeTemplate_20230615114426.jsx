import React from 'react'



import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'



const HomeTemplate = () => {
    return <div>
        <div>
            <Header></Header>
        </div>
        <div className="content vh-50">
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 text-center text-white p-5 bg-dark vh-20'>
            123
        </footer>
    </div>
}

export default HomeTemplate