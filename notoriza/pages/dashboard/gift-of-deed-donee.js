import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function FinancialGiftDeed() {

    const router = useRouter()
    
    const initInfo = {
        doneeName: "",
        doneeAddress: "",
        relationshipToDonor: "",
        doneeBankName: "",
        doneeAccountNumber: "",
        doneeAccountName: ""
    }

    const [info, setInfo] = useState(initInfo)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if( Object.values(info).every(value => value !== "")){
            const infos = localStorage.getItem('giftOfDeedInfo')
                ? JSON.parse(localStorage.getItem('giftOfDeedInfo'))
                : [];
            localStorage.setItem('giftOfDeedInfo', JSON.stringify({...infos, ...info})); 
            router.push('/dashboard/gift-of-deed-witness')
        }
        else {
            setError(true)
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
                                    src="/doneeBar.png"
                                    alt="Back"
                                    width={750}
                                    height={105}
                                />
                    </div>


                    <section className="missingSection">
                        <form onSubmit={handleSubmit}>
                            <h3>Donee/Recepient</h3>
                            <span className="inputUnit">
                                <label htmlFor="doneeName" className="loginInputLabel">Name</label>
                                <input 
                                    id="doneeName" 
                                    name="doneeName" 
                                    type="text" 
                                    placeholder="Please enter your name" className="registerInput"
                                    value={info.doneeName}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="doneeAddress" className="loginInputLabel">Full address</label>
                                <textarea
                                    id="doneeAddress" 
                                    name="doneeAddress" 
                                    type="text" 
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.doneeAddress}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="relationshipToDonor" className="loginInputLabel">Relationship to donor</label>
                                <select 
                                    id="relationshipToDonor" name="relationshipToDonor" type="text" 
                                    className="registerInput"
                                    value={info.relationshipToDonor}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="husband">Husband</option>
                                    <option value="wife">Wife</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="child">Child</option>
                                    <option value="brother">Brother</option>
                                    <option value="sister">Sister</option>
                                    <option value="uncle">Uncle</option>
                                    <option value="aunt">Aunt</option>
                                    <option value="cousin">Cousin</option>
                                    <option value="friend">Friend</option>
                                </select>
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="doneeBankName" className="loginInputLabel">Bank name</label>
                                <input 
                                    id="doneeBankName" 
                                    name="doneeBankName" 
                                    type="text" 
                                    placeholder="Please enter a bank name" 
                                    className="registerInput"
                                    value={info.doneeBankName}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="doneeAccountNumber" className="loginInputLabel">Account number</label>
                                <input
                                    id="doneeAccountNumber" 
                                    name="doneeAccountNumber" 
                                    type="text" 
                                    placeholder="Please enter your account number" className="registerInput"
                                    value={info.doneeAccountNumber}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="doneeAccountName" className="loginInputLabel">Account name</label>
                                <input
                                    id="doneeAccountName" 
                                    name="doneeAccountName" 
                                    type="text" 
                                    placeholder="Please enter your account name" className="registerInput"
                                    value={info.doneeAccountName}
                                    onChange={handleChange}
                                />
                            </span>

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