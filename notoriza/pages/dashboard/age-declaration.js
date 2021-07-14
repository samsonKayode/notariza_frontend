import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import {baseURL} from '../../config/constant';
import withAuth from '../../config/withAuth';

function AgeDeclaration() {

    const initInfo = {
        lastname: "",
        firstname: "",
        address: "",
        ownerName: "",
        relationshipToOwner: "",
        ownerSex: "",
        dob: "",
        sex: "",
        reason: "",
        placeOfBirth: "",
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
                url : `${baseURL}/service/ageDeclaration/makepayment`,
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
            setErrorMessage("Ensure all asterik sections are filled")
        }
             
    }


    return(
        <div className="dashContainer">
            <SideBar />

            <div className="dashboard">
                <div className="missingItem">
                    <header className="dashboardHeader missingItemHeader">
                        <h2>Age Declaration</h2>
                        
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
                                <label htmlFor="lastname" className="loginInputLabel">Surname</label>
                                <input 
                                    id="lastname" 
                                    name="lastname" 
                                    type="text" 
                                    placeholder="Surname" className="registerInput"
                                    value={info.lastname}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="firstname" className="loginInputLabel">First name / Other names</label>
                                <input 
                                    id="firstName"
                                    name="firstname"
                                    type="text"
                                    placeholder="First name" className="registerInput"
                                    value={info.firstname}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="address" className="loginInputLabel">Full address</label>
                                <textarea
                                    id="fullAddress"
                                    name="address"
                                    type="text"
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.address}
                                    onChange={handleChange} 
                                />
                            </span>
                            <h4 className="inputUnit ageQuestion" htmlFor="radioButton">Are you making this declaration for yourself?</h4>

                            <span className="inputUnit radioButton">
                                <input
                                    type="radio" 
                                    id="true" 
                                    name="Boolean"
                                    value="true"
                                />
                                <label 
                                    for="yes" className="radioButtonLabel">Yes</label>

                                <input
                                    type="radio" 
                                    id="false" 
                                    name="Boolean" 
                                    value="male"/>
                                <label for="false">No</label>
                                
                            </span>

                            <h4 className="inputUnit">(If No)</h4>

                            <span className="inputUnit">
                                <label htmlFor="ownerName" className="loginInputLabel">Owner’s Name</label>
                                <input 
                                    id="ownerName"
                                    name="ownerName"
                                    type="text"
                                    placeholder="Please enter owner’s name" 
                                    className="registerInput"
                                    value={info.ownerName}
                                    onChange={handleChange}
                                />
                            </span>
                            
                            <span className="inputUnit">
                                <label htmlFor="relationshipToOwner" className="loginInputLabel">Relationship to owner</label>
                                <select 
                                    id="firstName" 
                                    name="relationshipToOwner" 
                                    type="text" 
                                    placeholder="- Please make a selection -" 
                                    className="registerInput"
                                    value={info.relationshipToOwner}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="son">Son</option>
                                    <option value="daughter">Daughter</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="uncle">Uncle</option>
                                    <option value="aunt">Aunt</option>
                                    <option value="cousin">Cousin</option>
                                    <option value="friend">Friend</option>
                                </select>
                            </span>



                            <span className="inputUnit">
                                <label htmlFor="ownerSex" className="loginInputLabel">Owner’s Gender</label>
                                <select
                                    id="gender" 
                                    name="ownerSex" 
                                    type="text" 
                                    className="miniMissingInput"
                                    value={info.ownerSex}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </span>


                            <span className="inputUnit">
                                <label htmlFor="placeOfBirth" className="loginInputLabel">Place of Birth</label>
                                <input
                                    id="placeOfBirth" 
                                    name="placeOfBirth" 
                                    type="text" 
                                    placeholder="Enter Place of Birth" className="registerInput"
                                    value={info.placeOfBirth}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="miniMissing">
                                <span className="inputUnit">
                                    <label htmlFor="dob" className="loginInputLabel">New date of birth</label>
                                    <input
                                        id="ndob"
                                        name="dob"
                                        type="date" className="miniMissingInput"
                                        value={info.dob}
                                        onChange={handleChange}
                                    />
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
                                    <label htmlFor="reason" className="loginInputLabel">Enter Reason</label>
                                    <input 
                                        id="reason"
                                        name="reason"
                                        type="text" className="registerInput"
                                        placeholder="Reason"
                                        value={info.reason}
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
                                <h3>Age Declaration</h3>

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

export default withAuth(AgeDeclaration);