import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import {baseURL} from '../../config/constant';
import withAuth from '../../config/withAuth';


function NotarizeDocument() {

    const initInfo = {
        title: "",
        agent_code: "",
        file: "",
        ctc: false
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

    const handleChecked = (e) =>{
        setInfo({
            ...info,
            [e.target.name]: e.target.checked,
        });
    }

    const handleFile = (e) =>{
        console.log(e.target.files);
        setInfo({
            ...info,
            [e.target.name]: e.target.files[0],
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        try {

            const payload = new FormData();

            Object.entries(info).forEach((data)=>{
                payload.append(data[0],data[1])
            })

            const response = await axios.request({
                url : `${baseURL}/service/notarizedocument/makepayment`,
                method : 'POST',
                data : payload,
                headers: {
                    'Content-Type': 'multipart/form-data',
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
                        <h2>Notarize Documents</h2>
                        
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
                                <label htmlFor="title" className="loginInputLabel">Document Title</label>
                                <input
                                    id="title" 
                                    name="title" 
                                    type="text" 
                                    placeholder="Enter document title" className="registerInput"
                                    value={info.title}
                                    onChange={handleChange}
                                />
                            </span>

                            <span className="inputUnit">
                                <label htmlFor="agent_code" className="loginInputLabel">Reference Code</label>
                                <input
                                    id="agent_code" 
                                    name="agent_code" 
                                    type="text" 
                                    placeholder="Enter reference code" className="registerInput"
                                    value={info.agent_code}
                                    onChange={handleChange}
                                />

                            </span>
                            <span className="inputUnit">
                            <label htmlFor="file" className="loginInputLabel">Upload Files</label>
                            <div className="uploadDocument">
                                
                                <input
                                    type="file" 
                                    id="uploadDocument"
                                    name="file"
                                    file={info.file}
                                    onChange={handleFile}
                                />
                            </div>
                            </span>
                            

                            <input 
                                type="checkbox" 
                                id="infoVerify" 
                                name="ctc" 
                                className="infoVerify" 
                                onChange={handleChecked} 
                                checked={info.ctc}
                            />

                            <label htmlFor="infoVerify" className="formLabel">Check this box if you are certifying an original copy</label>

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
                                <h3>Notarize Documents</h3>

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
export default withAuth(NotarizeDocument);