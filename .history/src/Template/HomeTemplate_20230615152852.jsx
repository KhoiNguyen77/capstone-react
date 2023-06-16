import React from 'react'



import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'



const HomeTemplate = () => {
    return <div>
        <div className='header' style={{minHeight: '10vh'}}>
            <Header></Header>
        </div>
        <div className="content" style={{minHeight: '66vh'}}>
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 text-center text-white bg-dark fixed-bottom
        '>
            123
        </footer>
    </div>
}

export default HomeTemplate