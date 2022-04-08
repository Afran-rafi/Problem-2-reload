import React from 'react';
import "./Register.css"

const Register = () => {
    return (
        <div>
            <form className='container mt-5'>
                <h4>Sign Up</h4>
                <div className='mt-4'>
                    <input type="text" placeholder='Enter Your Name' /> <br /> <br />
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' /> <br /> <br />
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' /> <br /> <br />
                    <input className='submit-button' type="submit" value="Sign Up" />
                </div>
                <h6 className='mt-2'>-----or-----</h6>
                <div className='mt-3 '>
                    <button className='w-h rounded-circle'><i className="fa-brands fa-google"></i></button>
                    <button className='ms-3 w-h rounded-circle'><i className="fa-brands fa-facebook-square"></i></button>
                    <button className='ms-3 w-h rounded-circle'><i className="fa-brands fa-github"></i></button>
                </div>
            </form>
        </div>
    );
};

export default Register;