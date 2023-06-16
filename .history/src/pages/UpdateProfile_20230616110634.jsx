import Avatar from 'antd/es/avatar/avatar'
import React from 'react'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
    const { userProfile } = useSelector(state => state.userReducer)
    return (
        <div className='container mt-5'>
            <div className="card ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4 col-12">
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
                        <div className="col-lg-8 col-12">
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
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile