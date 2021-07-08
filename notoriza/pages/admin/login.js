import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'
import {baseURL} from '../../config/constant';

function Login () {

    const router = useRouter()

    const initUser = {
        username:"",
        password:""
    }
    const [user, setUser] = useState(initUser)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const userResponse = await axios.request({
                url : `${baseURL}/user/authenticate`,
                method : 'POST',
                data : user
            })
            localStorage.setItem('userData', JSON.stringify(userResponse)); 
            router.push('/admin/adminDash');
            
        } catch (error) {
            setError(true)
            setIsLoading(false)
            setErrorMessage("Ensure All information provided is accurate")
        }
             
    }

    return (
        <div className="loginPage">
            <header className="loginLogo">
                <Image
                    src="/logo.png"
                    alt="Logo Icon"
                    width={143}
                    height={37}
                />
            </header>
            <div className="loginSection">
                <h1 className="loginTitle">Welcome Back</h1>

                <span className="alternate">LOGIN WITH EMAIL</span>
                <form onSubmit={handleSubmit} className="loginForm">
                    
                    <label htmlFor="username" className="loginInputLabel">Email</label>
                    <input 
                        id="username"
                        name="username"
                        type="text"
                        className="loginInput"
                        placeholder="Email"
                        value={user.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" className="loginInputLabel">Password</label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        className="loginInput"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    
                    <div className="loggedInSection">
                        <input type="checkbox" id="loggedIn" name="loggedIn" className="loggedInCheck"/>
                        <label htmlFor="loggedIn" className="loggedInLabel">Keep me logged in</label>

                        <Link href="/forgot-password">
                        <a target="_blank" className="loginForgetPassword">Forgot Password ?</a>
                        </Link>
                    </div>
                    
                    {isLoading == true? <button className="loginBtn">Loading...
                    </button>: <button type="submit" className="loginBtn">Login</button>}
                    
                    {error == true? <h3 className="errormessage">{errorMessage}</h3>: "" }

                    <div className="loginRegister">Don’t have an account? <Link href="/admin/register"><a className="register" className="registerLink">Register</a></Link> </div>
                </form>
            </div>
            
        </div>
    )
}
export default Login;