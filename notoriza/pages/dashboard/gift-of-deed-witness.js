import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import {baseURL} from '../../config/constant';

function FinancialGiftDeed() {
    
    const initInfo = {
        firstWitnessName: "",
        firstWitnessAddress: "",
        firstWitnessOccupation: "",
        secondWitnessName: "",
        secondWitnessAddress: "",
        secondWitnessOccupation: ""
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
            setIsLoading(true)
            const infos = 
                localStorage.getItem('giftOfDeedInfo')
                ? JSON.parse(localStorage.getItem('giftOfDeedInfo'))
                : [];
            const payload = {...infos, ...info};
             const response = await axios.request({
                url : `${baseURL}/service/giftdeed/makepayment`,
                method : 'POST',
                data : payload,
                headers: {
                    'Authorization': `Bearer ${token}` 
                  }
            }) 
            localStorage.setItem('giftOfDeedInfo',null);
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
                        <h2>Financial Gift of Deed</h2>
                        
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

                    <div className="giftDeedImage">
                                <Image
                                    src="/witnessBar.png"
                                    alt="Back"
                                    width={750}
                                    height={105}
                                />
                    </div>


                    <section className="missingSection">
                        <form onSubmit={handleSubmit}>
                            <h3>Donor Witness</h3>
                            <span className="inputUnit">
                                <label htmlFor="firstWitnessName" className="loginInputLabel">Name</label>
                                <input
                                id="firstWitnessName" 
                                name="firstWitnessName" 
                                type="text" 
                                placeholder="Please enter your name" className="registerInput"
                                value={info.firstWitnessName}
                                onChange={handleChange}
                            />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="firstWitnessAddress" className="loginInputLabel">Full address</label>
                                <textarea 
                                    id="firstWitnessAddress" 
                                    name="firstWitnessAddress" 
                                    type="text" 
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.firstWitnessAddress}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="firstWitnessOccupation" className="loginInputLabel">Occupation</label>
                                <input 
                                    id="firstWitnessOccupation" 
                                    name="firstWitnessOccupation" 
                                    type="text" 
                                    placeholder="Please enter your occupation" 
                                    className="registerInput"
                                    value={info.firstWitnessOccupation}
                                    onChange={handleChange}
                                />
                            </span>

                            <h3>Donee Witness</h3>
                            <span className="inputUnit">
                                <label htmlFor="secondWitnessName" className="loginInputLabel">Name</label>
                                <input 
                                    id="secondWitnessName" 
                                    name="secondWitnessName" 
                                    type="text" 
                                    placeholder="Please enter your name" className="registerInput"
                                    value={info.secondWitnessName}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="secondWitnessAddress" className="loginInputLabel">Full address</label>
                                <textarea 
                                    id="secondWitnessAddress" 
                                    name="secondWitnessAddress" 
                                    type="text" 
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.secondWitnessAddress}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="secondWitnessOccupation" className="loginInputLabel">Occupation</label>
                                <input 
                                    id="secondWitnessOccupation" 
                                    name="secondWitnessOccupation" 
                                    type="text" 
                                    placeholder="Please enter your occupation" className="registerInput" 
                                    value={info.secondWitnessOccupation}
                                    onChange={handleChange}
                                />
                            </span>


                            <span className="miniMissing">
                                <button className="reset">Reset</button>
                                {isLoading == true? <button className="submit">Loading...
                                </button>: <button type="submit" className="submit">Submit</button> }
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
                                <h3>Financial Gift of Deed</h3>

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
export default FinancialGiftDeed;