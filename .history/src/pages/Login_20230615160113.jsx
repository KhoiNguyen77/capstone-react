import React from 'react'

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
                </div>
                <div className="card-footer">
                    <button type='submit' className='btn btn-success text-center'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login