import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import {baseURL} from '../../../config/constant';

function Login () {

    const router = useRouter()

    const initUser = {
        id:"",
        name:""
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
            const token = JSON.parse(localStorage.getItem("userData")).data.token
            const userResponse = await axios.request({
                url : `${baseURL}/admin/roles/save`,
                method : 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data : user
            })
            localStorage.setItem('userData', JSON.stringify(userResponse)); 
            router.push('/admin/adminDash/user-type');
            
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

                <form onSubmit={handleSubmit} className="loginForm">
                    
                    <label htmlFor="id" className="loginInputLabel">Id</label>
                    <input 
                        id="id"
                        name="id"
                        type="text"
                        className="loginInput"
                        placeholder="Id"
                        value={user.id}
                        onChange={handleChange}
                    />

                    <label htmlFor="name" className="loginInputLabel">Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className="loginInput"
                        placeholder="Name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    
                    {isLoading == true? <button className="signUpBtn">Loading...
                    </button>: <button type="submit" className="signUpBtn">Create User</button> }
                    
                    {error == true? <h3 className="errormessage">{errorMessage}</h3>: "" }

                </form>
            </div>
            
        </div>
    )
}
export default Login;