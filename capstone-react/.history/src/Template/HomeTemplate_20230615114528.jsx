import React from 'react'



import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'



const HomeTemplate = () => {
    return <div>
        <div className='header h-25'>
            <Header></Header>
        </div>
        <div className="content h-50">
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 text-center text-white p-5 bg-dark h-25'>
            123
        </footer>
    </div>
}

export default HomeTemplate