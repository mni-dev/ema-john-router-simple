import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pw" id="password" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link'>New to Ema-john? <Link to="/signup">Create an account.</Link></p>
            </div>
        </div>
    );
};

export default Login;