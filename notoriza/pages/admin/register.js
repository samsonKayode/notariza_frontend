import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'
import {baseURL} from '../../config/constant';
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
        confirmPassword:"",
        userType: "ADMIN USER",
        userRoleName: ""
        
    }
    const [user, setUser] = useState(initUser)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [rolesList, setRolesList] = useState([
        {
            "id": 1,
            "name": "USER"
        },
        {
            "id": 2,
            "name": "NOTARY"
        },
        {
            "id": 3,
            "name": "SUPPORT"
        },
        {
            "id": 4,
            "name": "SYSADMIN"
        },
        {
            "id": 5,
            "name": "ACCOUNTANT"
        }
    ]);

    useEffect(() => {
        // getRolesList()
    }, [])

    const getRolesList = async () => {
        // const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/roles/list`,
            method: 'GET',
        })).data;
        setRolesList(response);
    }

    const getTypesList = async () => {
        // const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/roles/list`,
            method: 'GET',
        })).data;
        setRolesList(response);
    }

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
            router.push('/admin/account-created-successful');
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

                <form onSubmit={handleSubmit} >

                   
                    <span className="registerForm">
                        <span className="inputUnit">
                            <label htmlFor="firstname" className="loginInputLabel">First Name</label>
                            <input 
                                id="email" 
                                name="firstname" 
                                type="text" 
                                placeholder="Email" 
                                className="registerInput"
                                value={user.firstname}
                                onChange={handleChange}
                            />
                        </span>
                        
                        <span className="inputUnit">
                            <label htmlFor="lastname" className="loginInputLabel">Surname</label>
                            <input 
                                id="lastname" 
                                name="lastname" 
                                type="text" 
                                className="registerInput" 
                                placeholder="Surname" 
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
                            <select
                                id="sex" 
                                name="sex" 
                                type="text" 
                                className="registerInput"
                                value={user.sex}
                                onChange={handleChange}>
                                    <option hidden value="">-Select-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                            </select>
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
                            <label htmlFor="userRoleName" className="loginInputLabel">Role</label>
                            <select name="userRoleName" id="userRoleName" value={user.userRoleName} onChange={handleChange} className="registerInput">
                                {rolesList.map((role)=>{
                                    return <option value={role.name}>{role.name}</option>
                                })}
                            </select>
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