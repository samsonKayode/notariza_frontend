import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Hero () {
    return (
        <div className="container">
            <div className="heroSection">
                <div className="heroWords">
                    <h1 className="heroTitle">Where Documents  
                        get Notar 
                        <Image 
                            src="/pen.svg"
                            alt="Pen Icon"
                            width={40}
                            height={40}
                            className="pen"
                        />
                        zed.</h1>

                        <p className="heroDesc">A digital platform for notarizing <br/> documents </p>
                        <button className="heroButton">Get Started</button>
                </div>

                <div className="heroImage">
                    <Image 
                        src="/book.png"
                        alt="Book Image"
                        width={810}
                        height={550}   
                    />
                </div>
            </div>

            <div className="serviceSection">

                <h3 className="serviceTitle">What would you like to do?</h3>

                <div className="services">
                    <div className="serviceItems">
                        <Image 
                            src="/missingIcon.png"
                            alt="Missing Icon"
                            width={70}
                            height={70}
                            className="serv"
                        />

                        <h4 className="serviceItemTitle">Missing/Stolen Items</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="">Learn More</a>
                    </div>

                    <div className="serviceItems">
                        <Image 
                            src="/changeOfName.png"
                            alt="Change of name Icon"
                            width={70}
                            height={70}
                            className=""
                        />

                        <h4 className="serviceItemTitle">Change of Name</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="">Learn More</a>
                    </div>

                    <div className="serviceItems">
                        <Image 
                            src="/declarationOfAge.png"
                            alt="Declaration Of Age Icon"
                            width={70}
                            height={70}
                            className=""
                        />

                        <h4 className="serviceItemTitle">Declaration of Age</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="#">Learn More</a>
                    </div>

                    <div className="serviceItems">
                        <Image 
                            src="/giftOfDeed.png"
                            alt="Gift Of Deed Image"
                            width={70}
                            height={70}
                            className=""
                        />

                        <h4 className="serviceItemTitle">Gift Deed</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="">Learn More</a>
                    </div>

                    <div className="serviceItems">
                        <Image 
                            src="/powerOfAttorney.png"
                            alt="Power Of Attorney Image"
                            width={70}
                            height={70}
                            className=""
                        />

                        <h4 className="serviceItemTitle">Power of Attorney</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="">Learn More</a>
                    </div>

                    <div className="serviceItems">
                        <Image 
                            src="/notarize.png"
                            alt="Notarize Image"
                            width={70}
                            height={70}
                            className=""
                        />

                        <h4 className="serviceItemTitle">Notarize Documents</h4>

                        <p className="serviceItemdesc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>

                        <a href="">Learn More</a>
                    </div>
                </div>

                
            </div>

            <div className="action">
                <div className="actionWords">
                    <h2 className="actionTitle">A Digital Solution To Notorazing Documents</h2>
                    <Link href="/Register">
                    <button className="actionBtn">Create Account</button>
                    </Link>
                </div>

                <div className="actionImage">
                    <Image 
                        src="/action.png"
                        alt="Action Image"
                        width={770}
                        height={750}
                    />
                </div>
            </div>

            <div className="contact">
                <h2 className="contactTitle">Do you have any questions?</h2>

                <input type="email" placeholder="Enter Email Address" className="contactInput" /><br/>

                <button className="contactBtn">Send</button>
            </div>
        </div>
        
    )
}

export default Hero;