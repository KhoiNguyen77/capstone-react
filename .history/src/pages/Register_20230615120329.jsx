import React from 'react'
import { Radio } from 'antd';
const Register = () => {
    return (
        <div className='container'>

            <form className='card form-group'>
                <div className="card-header">
                    <h2 className='text-center'>Register</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Email</p>
                            <input type="email" className='form-control mb-2' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Name</p>
                            <input type="text" className='form-control mb-2' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Password</p>
                            <input type="password" className='form-control mb-2' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Phone</p>
                            <input type="number" className='form-control mb-2' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Confirm Password</p>
                            <input type="password" className='form-control mb-2' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Gender</p>
                            <Radio.Group>
                                <Radio value={1}>Male</Radio>
                                <Radio value={2}>Femail</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
                <div className="card-bottom">
                    <button type='submit' className='btn btn-success'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register