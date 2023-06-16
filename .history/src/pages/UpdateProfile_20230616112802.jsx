import { Radio } from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import { getProfile } from '../Redux/Reducer/userReducer'
const UpdateProfile = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        const action = await getProfile();
        dispatch(action)
    }
    useEffect(() => {
        getUserProfile()
    }, [])
    return (
        <div className='container mt-5'>
            <div className="card ">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="avatar mx-auto w-50 d-flex">
                                <Avatar
                                    size={{
                                        xs: 60,
                                        sm: 70,
                                        md: 80,
                                        lg: 110,
                                        xl: 130,
                                        xxl: 150,
                                    }}
                                    src={userProfile?.avatar}
                                />
                            </div>

                        </div>
                        <Formik initialValues={{
                            email: '',
                            password: '',
                            name: '',
                            gender: true,
                            phone: '',
                        }} validationSchema={yup.object().shape({
                            email: yup.string().required("Email can't be blank !").email("Email is not valid !"),
                            password: yup.string().required("Password can't be blank !").min(5, "Password must have at least 5 characters").max(15, "Password only have 8 characters at max"),
                            name: yup.string().required("Name can't be blank"),
                            gender: yup.string().required("Please select your gender !"),
                            phone: yup.string().required("Phonenumber can't be blank !").max(10, "Phonenumber can only have 10 numbers"),
                            checkpass: yup.string().required("Confirm password can't be blank !").oneOf([yup.ref('password'), null], 'Password must match !')
                        })} onSubmit={(values) => {
                            console.log(values)
                        }}>
                            <Form className="col-lg-8 col-12">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <p className='d-inline-block me-2'>Email</p> <ErrorMessage id='email'></ErrorMessage>
                                        <Field type="email" className='form-control mb-2' id='email' name='email' />
                                    </div>
                                    <div className="col-md-6 col-12"> <ErrorMessage id='name'></ErrorMessage>
                                        <p className='d-inline-block me-2'>Name</p> <span className='text-danger'></span>
                                        <Field type="text" className='form-control mb-2' id='name' name='name' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12"> <ErrorMessage id='password'></ErrorMessage>
                                        <p className='d-inline-block me-2'>Password</p><span className='text-danger'></span>
                                        <Field type="password" className='form-control mb-2' id='password' name='password' />
                                    </div>
                                    <div className="col-md-6 col-12"> <ErrorMessage id='phone'></ErrorMessage>
                                        <p className='d-inline-block me-2'>Phone</p> <span className='text-danger'></span>
                                        <Field type="number" className='form-control mb-2' id='phone' name='phone' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-12"> <ErrorMessage id='checkpass'></ErrorMessage>
                                        <p className='d-inline-block me-2'>Confirm Password</p> <span className='text-danger'></span>
                                        <Field type="password" className='form-control mb-2' id='checkpass' name='checkpass' />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <p className='me-2'>Gender</p> <ErrorMessage></ErrorMessage>
                                        <Radio.Group id='gender' name='gender' defaultValue={true}>
                                            <Radio value={true} id='male'>Male</Radio>
                                            <Radio value={false} id='female'>Femail</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="card-footer text-end">
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile