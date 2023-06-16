import React from 'react'
import { Radio } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { signUp } from '../Redux/Reducer/userReducer';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Register = () => {
    const dispatch = useDispatch();
    const registerMik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            gender: true,
            phone: '',
        },
        onSubmit: values => {
            const actionSignUp = signUp(values);
            dispatch(actionSignUp)
        },
        validationSchema: yup.object().shape({
            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
            password: yup.string().required("Password can't be blank !").min(5, "Password must have at least 5 characters").max(15, "Password only have 8 characters at max"),
            name: yup.string().required("Name can't be blank"),
            gender: yup.string().required("Please select your gender !"),
            phone: yup.string().required("Phonenumber can't be blank !").max(10, "Phonenumber can only have 10 numbers"),
            checkpass: yup.string().required("Confirm password can't be blank !").oneOf([yup.ref('password'), null], 'Password must match !')
        })
    })

    return (
        <div className='container mt-5'>
            <form className='card form-group' onSubmit={registerMik.handleSubmit}>
                <div className="card-header">
                    <h2 className='text-center'>Register</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p className='d-inline-block me-2'>Email</p> <span className='text-danger'>{registerMik.errors.email}</span>
                            <input type="email" className='form-control mb-2' id='email' name='email' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p className='d-inline-block me-2'>Name</p> <span className='text-danger'>{registerMik.errors.name}</span>
                            <input type="text" className='form-control mb-2' id='name' name='name' onChange={registerMik.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p className='d-inline-block me-2'>Password</p><span className='text-danger'>{registerMik.errors.password}</span>
                            <input type="password" className='form-control mb-2' id='password' name='password' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p className='d-inline-block me-2'>Phone</p> <span className='text-danger'>{registerMik.errors.phone}</span>
                            <input type="number" className='form-control mb-2' id='phone' name='phone' onChange={registerMik.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p className='d-inline-block me-2'>Confirm Password</p> <span className='text-danger'>{registerMik.errors.checkpass}</span>
                            <input type="password" className='form-control mb-2' id='checkpass' name='checkpass' onChange={registerMik.handleChange} />
                        </div>
                        <div className="col-md-6 col-12">
                            <p className='me-2'>Gender</p>
                            <Radio.Group id='gender' name='gender' defaultValue={true} onChange={registerMik.handleChange}>
                                <Radio value={true} id='male'>Male</Radio>
                                <Radio value={false} id='female'>Femail</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button type='submit' className='btn btn-success'>Register</button>
                    <NavLink to={"/login"}className={'link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fst-italic fs-5 my-2'}>Already have an account? Sign in</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Register