import React, { useState } from 'react';
import logo from '../../../images/logo-1.png';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MenuBar from '../../Header/MenuBar/MenuBar';

const Register = () => {
    const { registerUser, error } = useAuth();
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState('')

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        registerUser(data?.email, data?.password, data?.username, history);
        if (data.password.length < 6) {
            setErrorMsg(<h6 className="text-white pink-bg py-1">Password must be at least 6 characters!</h6>)
        }
        else if (error) {
            setErrorMsg(<h6 className="text-white pink-bg py-1">Email already used</h6>)
        }
        else {
            setErrorMsg('')
        }
    };
    return (
        <>
            <MenuBar />
            <div className="main-div p-5">
                <div className="login-section py-1">
                    <div className="ps-5 pt-3">
                        <img src={logo} alt="" className="w-25" />
                    </div>
                    <div className="container">
                        <div className="form-container mx-auto rounded-3 px-5 py-5">
                            {/* login form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="form-control mb-3" {...register("username", { required: true })} placeholder="Enter Your Name" />
                                <input type="email" className="form-control" {...register("email", { required: true })} placeholder="Enter Your Email" />

                                <input type="password" className="form-control my-3" {...register("password", { required: true })} placeholder="Enter Your Password" />
                                <div className="ms-5">
                                    <button type="submit" className="btn green-bg text-white ms-">Register</button>
                                </div>
                            </form>
                            <div className="d-flex">
                                <div className="pe-5">
                                    <p className="text-white">Don’t have an account? <Link to="/register" className="green-text pe-5">Create Account</Link> </p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;