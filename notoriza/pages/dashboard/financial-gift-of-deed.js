import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import withAuth from '../../config/withAuth';

function FinancialGiftDeed() {
    
    const router = useRouter()

    const initInfo = {
        donorName: "",
        donorAddress: "",
        relationshipToDonee: "",
        denomination: "",
        amountGifted: "",
        donorBankName: "",
        donorAccountNumber: "",
        donorAccountName: "",
        transferMode: "",
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
            localStorage.setItem('giftOfDeedInfo', JSON.stringify(info)); 
            router.push('/dashboard/gift-of-deed-donee')
        }else{
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
                                    src="/progressBar.png"
                                    alt="Back"
                                    width={750}
                                    height={105}
                                />
                    </div>


                    <section className="missingSection">
                        <form onSubmit={handleSubmit}>
                            <h3>Donor</h3>
                            <span className="inputUnit">
                                <label htmlFor="donorName" className="loginInputLabel">Name</label>
                                <input 
                                    id="donorName" 
                                    name="donorName" 
                                    type="text" 
                                    placeholder="Please enter your name" className="registerInput"
                                    value={info.donorName}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="donorAddress" className="loginInputLabel">Full address</label>
                                <textarea 
                                    id="donorAddress" name="donorAddress" 
                                    type="text" 
                                    placeholder="Enter Address" className="registerInput"
                                    value={info.donorAddress}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="relationshipToDonee" className="loginInputLabel">Relationship to donee</label>
                                <select 
                                    id="firstName" name="relationshipToDonee" type="text" 
                                    placeholder="- Please make a selection -" className="registerInput"
                                    value={info.relationshipToDonee}
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
                                <label htmlFor="denomination" className="loginInputLabel">Mode of transfer</label>
                                <select 
                                    id="transferMode" name="transferMode" type="text" 
                                    placeholder="- Please make a selection -" className="registerInput"
                                    value={info.transferMode}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="cash">Cash Deposit</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="transfer">Online Transfer</option>
                                </select>
                            </span>


                            <span className="inputUnit">
                                <label htmlFor="amountGifted" className="loginInputLabel">Amount gifted</label>
                                <input 
                                    id="amountGifted" 
                                    name="amountGifted" 
                                    type="text" 
                                    placeholder="Please enter amount  (ex. N200,000.00) " 
                                    className="registerInput" 
                                    value={info.amountGifted}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="donorBankName" className="loginInputLabel">Bank name</label>
                                <input 
                                id="donorBankName" 
                                name="donorBankName" 
                                type="text" 
                                placeholder="Please select a bank" className="registerInput"
                                value={info.donorBankName}
                                onChange={handleChange}
                            />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="donorAccountNumber" className="loginInputLabel">Account number</label>
                                <input 
                                    id="donorAccountNumber" name="donorAccountNumber" type="text" 
                                    placeholder="Please enter your account number" className="registerInput" 
                                    value={info.donorAccountNumber}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="donorAccountName" className="loginInputLabel">Account name</label>
                                <input 
                                    id="donorAccountName" name="donorAccountName" 
                                    type="text" 
                                    placeholder="Please enter your account name" className="registerInput" 
                                    value={info.donorAccountName}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="transferMode" className="loginInputLabel">Denomination</label>
                                <select 
                                    id="denomination" name="denomination" type="text" 
                                    placeholder="- Please make a selection -" className="registerInput"
                                    value={info.denomination}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="₦">₦</option>
                                    <option value="$">$</option>
                                    <option value="£">£</option>
                                    <option value="€">€</option>
                                </select>
                            </span>

                            <input type="checkbox" id="infoVerify" name="infoVerify" className="infoVerify"/>
                            <label htmlFor="infoVerify" className="formLabel">By clicking the submit button, you agree that all information submiited is true</label>

                            <span className="miniMissing">
                                <button className="reset">Reset</button>
                                <button type="submit" className="submit">Submit</button>
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
export default withAuth(FinancialGiftDeed);