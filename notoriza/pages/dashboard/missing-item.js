import React from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link'

function MissingItem() {
    return(
        <div className="dashContainer">
            <SideBar />

            <div className="dashboard">
                <div className="missingItem">
                    <header className="dashboardHeader missingItemHeader">
                        <h2>Missing/Stolen Item</h2>
                        
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
                        <form action="">
                            <span className="inputUnit">
                                <label htmlFor="Surname" className="loginInputLabel">Surname</label>
                                <input id="surname" name="surname" type="text" placeholder="Surname" className="registerInput" />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="firstName" className="loginInputLabel">First name / Other names</label>
                                <input id="firstName" name="firstName" type="text" placeholder="First name" className="registerInput" />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="fullAddress" className="loginInputLabel">Full address</label>
                                <input id="fullAddress" name="fullAddress" type="text" placeholder="Enter Address" className="fullAddInput" />
                            </span>
                            <span className="miniMissing">
                                <span className="inputUnit">
                                    <label htmlFor="dob" className="loginInputLabel">Date of Birth</label>
                                    <input id="dob" name="dob" type="date" className="miniMissingInput" />
                                </span>

                                <span className="inputUnit">
                                    <label htmlFor="gender" className="loginInputLabel">Gender</label>
                                    <input id="gender" name="gender" type="text" placeholder="-Select-" className="miniMissingInput" />
                                </span>

                                <span className="inputUnit">
                                    <label htmlFor="dEO" className="loginInputLabel">Date Event Occured</label>
                                    <input id="dEO" name="dEO" type="date" className="miniMissingInput" />
                                </span>

                                <span className="inputUnit">
                                    <label htmlFor="Time" className="loginInputLabel">Time of Event</label>
                                    <input id="time" name="time" type="time" placeholder="Enter Time" className="miniMissingInput" />
                                </span>

                                <span className="inputUnit">
                                    <label htmlFor="Nature" className="loginInputLabel">Nature of event</label>
                                    <input id="nature" name="nature" type="text" placeholder="-Select-" className="miniMissingInput" />
                                </span>
                            </span>
                            

                            <span className="inputUnit">
                                <label htmlFor="placeOfEmployment" className="loginInputLabel">Place of Employment</label>
                                <input id="placeOfEmployment" name="placeOfEmployment" type="text" placeholder="Enter current place of employment" className="registerInput" />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="addressOfEmployer" className="loginInputLabel">Full address of employer</label>
                                <input id="addressOfEmployer" name="addressOfEmployer" type="text" placeholder="Enter address of employer" className="registerInput" />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="lOMI" className="loginInputLabel">Description of how items were misplaced</label>
                                <input id="lOMI" name="lOMI" type="text" placeholder=" " className="missingDesc" />
                                <span className="missingDescSpan">Maximum of 200 words</span>
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="mIs" className="loginInputLabel">List out items that were misplaced</label>
                                <input id="mIs" name="mIs" type="text" placeholder=" " className="missingDesc" />
                                <span className="missingDescSpan">Seperate items by comma</span>
                            </span>

                            <input type="checkbox" id="infoVerify" name="infoVerify" className="infoVerify"/>
                            <label htmlFor="infoVerify" className="formLabel">By clicking the submit button, you agree that all information submiited is true</label>

                            <span className="miniMissing">
                                <button className="reset">Reset</button>
                                <button className="submit">Submit</button>
                            </span>
                            
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
                                <h3>Missing/Stolen Items</h3>

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

export default MissingItem