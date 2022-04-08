import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <form className='container mt-5'>
                <h4>Login</h4>
                <div className='mt-4'>
                    <input type="email" name="" id="email" placeholder='Enter Your Email' /> <br /> <br />
                    <input type="password" name="" id="password" placeholder='Enter Your Password' /> <br /> <br />
                    <input className='submit-button' type="submit" value="Login" />
                </div>
                <h6 className='mt-2'>-----or-----</h6>
                <div className='mt-3 '>
                    <button onClick={signInWithGoogle} className='w-h rounded-circle'><i className="fa-brands fa-google"></i></button>
                    <button className='ms-3 w-h rounded-circle'><i className="fa-brands fa-facebook-square"></i></button>
                    <button className='ms-3 w-h rounded-circle'><i className="fa-brands fa-github"></i></button>
                </div>
            </form>
        </div>
    );
};

export default Login;