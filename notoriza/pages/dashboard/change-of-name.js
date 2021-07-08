import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import {baseURL} from '../../config/constant';
import withAuth from '../../config/withAuth';

function ChangeOfName() {

    const initInfo = {  
        surname: "",
        firstname: "",
        address: "",
        dob: "",
        sex: "",
        former_name: "",

    }

    const [info, setInfo] = useState(initInfo)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        try {
            const response = await axios.request({
                url : `${baseURL}/service/changeofname/makepayment`,
                method : 'POST',
                data : info,
                headers: {
                    'Authorization': `Bearer ${token}` 
                  }
            }) 
            window.location.replace(response.data.data.authorization_url);
        } catch (error) {
            setError(true)
            setIsLoading(false)
            setErrorMessage("Ensure all sections are filled")
        }
             
    }


    return(
        <div className="dashContainer">
            <SideBar />

            <div className="dashboard">
                <div className="missingItem">
                    <header className="dashboardHeader missingItemHeader">
                        <h2>Change of Name</h2>
                        
                        <div className="dashIdentity">
                            <span className="dashIdentityName">Samson Johnson</span>
                            <span>
                                <Image
                                    src="/profile.png"
                                    alt="Profile Icon"
                                    width={25}
                                    height={29}
                                />
                            </span>
                        </div>
                        
                    </header>

                    <div className="back">
                            <div className="backIcon">
                                <Image
                                    src="/backButton.png"
                                    alt="Back"
                                    width={14}
                                    height={9}
                                />
                            </div>
                            <Link href="/dashboard">
                                Back
                            </Link>
                            
                    </div>


                    <section className="missingSection">
                        <form onSubmit={handleSubmit}>
                            <span className="inputUnit">
                                <label htmlFor="Surname" className="loginInputLabel">Surname</label>
                                <input 
                                    id="surname" 
                                    name="surname" 
                                    type="text" 
                                    placeholder="Surname" 
                                    className="registerInput"
                                    value={info.surname}
                                    onChange={handleChange} 
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="firstname" className="loginInputLabel">First name / Other names</label>
                                <input 
                                    id="firstname" 
                                    name="firstname" 
                                    type="text" 
                                    placeholder="First Name/ Other Names" className="registerInput"
                                    value={info.firstname}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="address" className="loginInputLabel">Full address</label>
                                <textarea 
                                    id="address" 
                                    name="address" 
                                    type="text" 
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.address}
                                    onChange={handleChange}
                                />
                            </span>
                            <span className="miniMissing">
                                <span className="inputUnit">
                                    <label htmlFor="dob" className="loginInputLabel">Date of Birth</label>
                                    <input 
                                        id="dob" 
                                        name="dob" 
                                        type="date" 
                                        className="miniMissingInput"
                                        value={info.dob}
                                        onChange={handleChange} />
                                </span>

                                <span className="inputUnit">
                                    <label htmlFor="sex" className="loginInputLabel">Gender</label>
                                    <select
                                        id="gender" 
                                        name="sex" 
                                        type="text" placeholder="-Select-" className="miniMissingInput"
                                        value={info.sex}
                                        onChange={handleChange}
                                    >
                                        <option value="">-Select-</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </span>
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="former_name" className="loginInputLabel">Former Name</label>
                                <input 
                                    id="former_name" 
                                    name="former_name" 
                                    type="text" 
                                    placeholder="Enter former name" className="registerInput"
                                    value={info.former_name}
                                    onChange={handleChange}
                                />
                            </span>

                            <input type="checkbox" id="infoVerify" name="infoVerify" className="infoVerify"/>
                            <label htmlFor="infoVerify" className="formLabel">By clicking the submit button, you agree that all information submiited is true</label>

                            <span className="miniMissing">
                                <button className="reset">Reset</button>
                                <button className="submit">Submit</button>
                            </span>

                            {error == true? <h3 className="errormessage">{errorMessage}</h3>: "" }
                        </form>


                        <section className="moreInfo">
                            <div>
                                <Image
                                    src="/actionIcon.png"
                                    alt="Action Icon"
                                    width={105}
                                    height={96}
                                />
                            </div>

                            <div className="moreInfoWords">
                                <h3>Change of Name</h3>

                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .<br /> <br />
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>
                            </div>
                            
                        </section>
                    </section>

                </div>

            </div>

        </div>

    )

}

export default withAuth(ChangeOfName);