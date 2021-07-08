import React from 'react';
import Image from 'next/image'


function Footer () {
    return (
        <div className="footer container">
            <div className="footerIcon">
                <Image
                    src="/logo.png"
                    alt="Logo Icon"
                    width={143}
                    height={37}
                    className="footerLogo"
                />

                <div className="social">
                    <span className="socialIcon">
                        <Image
                            src="/twitter.png"
                            alt="Twitter Icon"
                            width={35}
                            height={35}
                        />
                    </span>
                    
                    <span className="socialIcon">
                        <Image
                            src="/linkedin.png"
                            alt="Twitter Icon"
                            width={35}
                            height={35}
                        />
                    </span>

                    <span className="socialIcon">
                        <Image
                            src="/facebook.png"
                            alt="Twitter Icon"
                            width={35}
                            height={35}
                        />
                    </span>

                    <span className="socialIcon">
                        <Image
                            src="/instagram.png"
                            alt="Twitter Icon"
                            width={35}
                            height={35}
                        />
                    </span>
                </div>
            </div>

            <ul>
                <li><h3 className="footerTitle">Our Services</h3></li>
                <li className="footerItem"><a href="#">Missing/Stolen Item</a></li>
                <li className="footerItem"><a href="#">Change of Name</a></li>
                <li className="footerItem"><a href="#">Age Declaration</a></li>
                <li className="footerItem"><a href="#">Gift Deed</a></li>
                <li className="footerItem"><a href="#">Power of Attorney</a></li>
                <li className="footerItem"><a href="#">Notarize</a></li>
            </ul>

            <ul>
                <li><h3 className="footerTitle">Company</h3></li>
                <li className="footerItem"><a href="#">About Us</a></li>
                <li className="footerItem"><a href="#">Get in Touch</a></li>
            </ul>

            <ul>
                <li><h3 className="footerTitle">Resources</h3></li>
                <li className="footerItem"><a href="#">FAQ</a></li>
            </ul>
        </div>
    )
}

export default Footer