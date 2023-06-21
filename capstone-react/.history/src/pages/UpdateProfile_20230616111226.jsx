import { Radio } from 'antd'
import Avatar from 'antd/es/avatar/avatar'
import React from 'react'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    return (
        <div className='container mt-5'>
        <div className="row">
            
        </div>
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
                                    src={userProfile.avatar}
                                />
                            </div>

                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Email</p> <span className='text-danger'></span>
                                    <input type="email" className='form-control mb-2' id='email' name='email' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Name</p> <span className='text-danger'></span>
                                    <input type="text" className='form-control mb-2' id='name' name='name' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Password</p><span className='text-danger'></span>
                                    <input type="password" className='form-control mb-2' id='password' name='password' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Phone</p> <span className='text-danger'></span>
                                    <input type="number" className='form-control mb-2' id='phone' name='phone' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <p className='d-inline-block me-2'>Confirm Password</p> <span className='text-danger'></span>
                                    <input type="password" className='form-control mb-2' id='checkpass' name='checkpass' />
                                </div>
                                <div className="col-md-6 col-12">
                                    <p className='me-2'>Gender</p>
                                    <Radio.Group id='gender' name='gender' defaultValue={true}>
                                        <Radio value={true} id='male'>Male</Radio>
                                        <Radio value={false} id='female'>Femail</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
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