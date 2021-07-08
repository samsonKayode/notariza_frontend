import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'
import {baseURL} from '../config/constant';
function Register() {

    const router = useRouter()

    const initUser = {
        firstname:"",
        lastname:"",
        otherNames:"",
        dob:"",
        sex:"",
        username:"",
        address:"",
        password:"",
        confirmPassword:""
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
        if (user.password === user.confirmPassword) {
            delete user.confirmPassword;
            await axios.request({
                url : `${baseURL}/user/register`,
                method : 'POST',
                data : user
            })
            router.push('/account-created-successful');
        }else{
            setError(true)
            setIsLoading(false)
            setErrorMessage("Password and Confirm Password must be exactly the same")
        }
        
    }
        
    return (
        <div className="container">
            <div>
                <div className="registerHeader">
                    <h2 className="registerTitle">Create Account</h2>
                    
                    <Link href="/">
                    <div className="back">
                        <div className="backIcon">
                            <Image
                                src="/backButton.png"
                                alt="Back"
                                width={14}
                                height={9}
                            />
                        </div>
                            Back
                    </div>
                    </Link>
                </div>

                <button className="googleBtn registerGoogle">
                    <span className="googleIcon">
                        <Image
                            src="/googleLogo.png"
                            alt="Google Icon"
                            width={28}
                            height={28}
                        />
                    </span>

                    Sign up with Google
                </button>

                <div className="alternate">OR</div>

                <form onSubmit={handleSubmit} >

                   
                    <span className="registerForm">
                        <span className="inputUnit">
                            <label htmlFor="firstname" className="loginInputLabel">First Name</label>
                            <input 
                                id="firstname" 
                                name="firstname" 
                                type="text" 
                                placeholder="First Name" 
                                className="registerInput"
                                value={user.firstname}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="lastname" className="loginInputLabel">Last Name</label>
                            <input 
                                id="lastname" 
                                name="lastname" 
                                type="text" 
                                className="registerInput" 
                                placeholder="Last Name" 
                                value={user.lastname}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="otherNames" className="loginInputLabel">Other Names</label>
                            <input 
                                id="otherNames" 
                                name="otherNames" 
                                type="text" 
                                className="registerInput" 
                                placeholder="Other Names"
                                value={user.otherNames}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="dob" className="loginInputLabel">Date of Birth</label>
                            <input 
                                id="dob" 
                                name="dob" 
                                type="date" 
                                className="registerInput" 
                                placeholder="Pick a Date" 
                                value={user.dob}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="sex" className="loginInputLabel">Sex</label>
                            <input 
                                id="sex" 
                                name="sex" 
                                type="text" 
                                className="registerInput" 
                                placeholder="sex" 
                                value={user.sex}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="username" className="loginInputLabel">Email</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                className="registerInput" 
                                placeholder="Enter email address" 
                                value={user.username}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="address" className="loginInputLabel">Full Address</label>
                            <input 
                                id="address" 
                                name="address" 
                                type="text" 
                                className="inputUnitLong" 
                                placeholder="Full address" 
                                value={user.address}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="password" className="loginInputLabel">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                className="registerInput" 
                                placeholder="Password" 
                                value={user.password}
                                onChange={handleChange}
                            /> 
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="password" className="loginInputLabel">Confirm Password</label>
                            <input 
                                id="password" 
                                name="confirmPassword" 
                                type="password" 
                                className="registerInput" 
                                placeholder="Confirm your password" 
                                value={user.confirmPassword}
                                onChange={handleChange}
                            />
                        </span>
                    </span>



                    <span className="btnAndError">
                        {isLoading == true? <button className="signUpBtn">Loading...
                        </button>: <button type="submit" className="signUpBtn">Sign up</button> }


                        {error == true? <h3 className="errormessage">{errorMessage}</h3>: "" }
                    </span>
                    
                    
                    
                    

                </form>

                <span className="termsPolicy">By creating an account, you agree to the <a href="">Terms and Conditions</a>  and <a href="">Privacy Policy</a> </span>
            </div>
        </div>
    )
}

export default Register;