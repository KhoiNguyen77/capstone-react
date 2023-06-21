import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container mt-5'>
            <form className='card form-group w-50 mx-auto'>
                <div className="card-header">
                    <h2 className='text-center'>Login</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className=" col-12">
                            <p className='d-inline-block me-2'>Email</p>
                            <input type="email" className='form-control mb-2' id='email' name='email' />
                        </div>
                        <div className=" col-12">
                            <p className='d-inline-block me-2'>Password</p>
                            <input type="text" className='form-control mb-2' id='name' name='name' />
                        </div>
                    </div>
                    <div className="row text-end">
                        <NavLink to={"/register"} className={'link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fst-italic fs-5 my-2'}>Register Now?</NavLink>
                    </div>
                </div>
                <div className="card-footer text-center bg-none p-3">

                    <button type='submit' className='btn btn-success w-50 my-3'>Login</button>
                    <p>Hoặc đăng nhập bằng</p>
                </div>
            </form>
        </div>
    )
}

export default Login