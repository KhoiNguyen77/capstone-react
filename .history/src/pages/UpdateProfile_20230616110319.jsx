import React from 'react'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
    const {userProfile} = useSelector(state => state.userReducer)
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <div className="left_card">
                        {userProfile.avatar}
                    </div>
                    <div className="right_card"></div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile