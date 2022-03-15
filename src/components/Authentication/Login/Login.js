import React from 'react';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-1.png';

const Login = () => {
    const { loginUser, error } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        loginUser(data?.email, data?.password, location, history);
    };
    return (
        <div className="main-div p-5">
            <div className="login-section py-1">
                <div className="">
                    <img src={logo} alt="" className="w-25" />
                </div>
                <div className="container">
                    <div className="form-container mx-auto rounded-3 px-5 py-5">
                        {/* login form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" className="form-control" {...register("email", { required: true })} placeholder="Enter Your Email" />

                            <input type="password" className="form-control my-3" {...register("password", { required: true })} placeholder="Enter Your Password" />
                            {/* <button type="submit" className="btn bg-success w-30 mb-2">LOGIN</button> */}
                        </form>
                        <p className="text-white">Don’t have an account? <Link to="/register" className="pink-text pe-5">Create Account</Link> <a href="" className="ms-5">LOGIN</a></p>
                        {error ? <p className="pink-bg text-white py-1" >Incorrect email or password!</p> : <p></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;