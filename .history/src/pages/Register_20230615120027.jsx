import React from 'react'

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
                            <input type="email" className='form-control' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Name</p>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Password</p>
                            <input type="password" className='form-control' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Phone</p>
                            <input type="number" className='form-control' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <p>Confirm Password</p>
                            <input type="password" className='form-control' />
                        </div>
                        <div className="col-md-6 col-12">
                            <p>Name</p>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register