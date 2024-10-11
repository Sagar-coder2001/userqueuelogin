import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                           <div className="hotelimg-container">
                            <img src="https://img.freepik.com/free-photo/swimming-pool_74190-1977.jpg?t=st=1728582687~exp=1728586287~hmac=929ff3da9e1e2cf6a5f7ce181ad1b0857151c99452110578beae3d5a7d28dbe4&w=740" alt="" />
                           </div>
                        </div>
                        <div className="col-lg-6">
                            {/* form start here */}
                            <div className="form-container">
                                <form action="">
                                    <span style={{fontSize:'30px', margin:'60px 0px'}}>
                                       Registration
                                    </span>
                                    <div className='input-container text-start'>
                                        <label htmlFor="username" >Name</label>
                                        <input
                                            type='text'
                                            // value={login.email}
                                            className="form-control"
                                            // onChange={showLoginData}
                                            name='username'
                                        />
                                    </div>
                                    <div className='input-container text-start'>
                                    <label htmlFor="username" >Contact No</label>
                                        <input
                                            type='tel'
                                            // value={login.email}
                                            className="form-control"
                                            // onChange={showLoginData}
                                            name='Contact'
                                            maxLength={10}
                                        />
                                    </div>
                                    <div className='input-container text-start'>
                                    <label htmlFor="username" >No Off Peoples</label>
                                        <input
                                            type='number'
                                            // value={login.password}
                                            className="form-control"
                                            // onChange={showLoginData}
                                            name='Peoples'
                                        />
                                    </div>

                                    <div className='input-container text-start'>
                                    <span className='gender'>Gender</span> <br></br>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            // checked={userdetails.gender === 'male'}
                                            // onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Male
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            // checked={userdetails.gender === 'female'}
                                            // onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Female
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            // checked={userdetails.gender === 'other'}
                                            // onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Other
                                    </label>
                                        </div>
                                        <div className="input-container text-start">
                                        <span className='gender'>Rooms</span> <br></br>
                                        <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="ac"
                                            value="ac"
                                            // checked={userdetails.gender === 'other'}
                                            // onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Ac
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="ac"
                                            value="nonac"
                                            // checked={userdetails.gender === 'other'}
                                            // onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Non Ac
                                    </label>

                                        </div>
                                    <div className="submit-container btn btn-info w-50 mt-3">Submit</div>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login