import Lottie from 'lottie-react';
import React, { useContext } from 'react'
import loginLottieData from "../../assets/lottie files/login.json.json"
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {

    const { signInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log("in login", location);
    const from = location.state || "/";


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(result => {
                console.log("sing in", result.user.email)
                const user = { email: email };
                axios.post("http://localhost:5000/jwt", user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            })

        const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and include at least one special character.");
            return;
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={loginLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSignIn} action=""> <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset></form>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn