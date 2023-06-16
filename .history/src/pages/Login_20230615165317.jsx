import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Reducer/userReducer';
const Login = () => {
    const dispatch = useDispatch();
    const logIn = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            debugger
            const actionLogin = login(values);
            dispatch(actionLogin)
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
            password: yup.string().required("Password can't be blank !").min(5, "Password must have at least 5 characters").max(15, "Password only have 8 characters at max"),
        })

    })
    return (
        <div className='container mt-5'>
            <form className='card form-group w-50 mx-auto' onSubmit={logIn.handleSubmit}>
                <div className="card-header">
                    <h2 className='text-center'>Login</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className=" col-12">
                            <p className='d-inline-block me-2'>Email</p> <span className='text-danger'>{logIn.errors.email}</span>
                            <input type="email" className='form-control mb-2' id='email' name='email' onChange={logIn.handleChange} />
                        </div>
                        <div className=" col-12">
                            <p className='d-inline-block me-2'>Password</p> <span className='text-danger'>{logIn.errors.password}</span>
                            <input type="number" className='form-control mb-2' id='password' name='password' onChange={logIn.handleChange} />
                        </div>
                    </div>
                    <div className="row text-end">
                        <NavLink to={"/register"} className={'link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fst-italic fs-5 my-2'}>Register Now?</NavLink>
                    </div>
                </div>
                <div className="card-footer text-center bg-light p-3">

                    <button type='submit' className='btn btn-success w-50 my-3 p-3'>Login</button>
                    <hr className='w-75 mx-auto' />
                    <p className='fs-5'>Hoặc đăng nhập bằng</p>
                    <NavLink className={"btn btn-primary p-3 text-white w-50 fs-5"}><i className="fab fa-facebook"></i> Continue with Facebook</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login