import React from 'react'



import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'



const HomeTemplate = () => {
    return <div>
        <div className='header' style={{height: '25vh'}}>
            <Header></Header>
        </div>
        <div className="content" style={{height: '60vh'}}>
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 text-center text-white bg-dark' style={{height: '25vh'}}>
            123
        </footer>
    </div>
}

export default HomeTemplate