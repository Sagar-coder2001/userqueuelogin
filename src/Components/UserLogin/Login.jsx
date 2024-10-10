import React, { useState } from 'react';
import "./Login.css";
// import { useNavigate } from 'react-router-dom';


function Login() {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });
  const [isloggedin, setIsLoggedIn] = useState(null); // Use null to determine no status initially
//   const navigate = useNavigate();

  const showLoginData = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const allowLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('username', login.username);
      formData.append('password', login.password);

      const response = await fetch('http://192.168.1.25/faceSearch/photographerLogin.php?do=login', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      localStorage.setItem('islogin', data.Token);
      localStorage.setItem('username', login.username)

      if (data.Status === true) {
        setIsLoggedIn(true);
        // navigate('/Main')
      } else {
        setIsLoggedIn(false);
      }
      clearLogin();
    } catch (err) {
      console.log(err);
    }
  };

  const clearLogin = () => {
    setLogin({
      username: '',
      password: ''
    });
  };

  const closePopup = () => {
    setIsLoggedIn(null); // Reset login status
  };

  return (
    <>
      <div className='loginform-container'>

        {/* <div className="row">
            <div className="col-md-4">
            </div>
            
       <div className="col-md-8">
        {isloggedin === null ? (
          <div className="form-container">
            <h2>Login</h2>
            <img src="https://th.bing.com/th?id=OIP.mrfb_atnkblnmsDiAbLNKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Login" />
            <form action="" autoComplete='off'>
              <span className='create'>Don't Have An Account <a href="">Create One</a></span>
              <div className='input-container'>
                <input
                  type='text'
                  value={login.username}
                  placeholder='Username'
                  className="form-control"
                  onChange={showLoginData}
                  name='username'
                />
              </div>
              <div className='input-container'>
                <input
                  type='password'
                  value={login.password}
                  placeholder='Password'
                  className="form-control"
                  onChange={showLoginData}
                  name='password'
                />
                <span className='forgetpass'><a href="#">Forgot Password?</a></span>
              </div>
              <div className='login-container'>
                <button className='login' id='login' onClick={allowLogin}>Login</button>
              </div>
            </form>
          </div>
        ) : (

          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong><h3>Congratulation!</h3></strong> <h5>{isloggedin ? 'User Logged In Successfully!' : 'Login Failed. Please Try Again.'}</h5>
            <button type="button" onClick={closePopup} className='popbtn'>ok</button>
          </div>
        )}
        </div>
        </div> */}

        <div className="row">
            <div className="col-md-4">
                ss
            </div>

            <div className="col-md-8">
            </div>

        </div>

      </div>
    </>
  );
}

export default Login;
