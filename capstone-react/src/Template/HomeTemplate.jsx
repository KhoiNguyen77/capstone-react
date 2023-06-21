import React, { useState } from 'react'

import { createBrowserHistory } from 'history'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Component/Header'

const HomeTemplate = () => {
    return <div>
        <div className='header' style={{ minHeight: '10vh' }}>
            <Header></Header>
        </div>
        <div className="content" >
            <Outlet></Outlet>
        </div>
        <footer className='fs-3 p-4 text-center text-white bg-dark  mt-5'>
            @2023 CyberSoft All rights Resevered
        </footer>
    </div>
}

export default HomeTemplate