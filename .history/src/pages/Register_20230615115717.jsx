import React from 'react'

const Register = () => {
  return (
    <div className='container'>
        <h2 className='text-center'>Register</h2>
        <form className='form'>
            <div className="row">
                <div className="col-md-6 col-12 form-group">
                    <p>Email</p>
                    <input type="email" className='form-control' />
                </div>
                <div className="col-md-6 col-12 form-group">
                <p>Name</p>
                    <input type="text" className='form-control' />
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register