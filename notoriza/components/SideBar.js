import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function SideBar () {
    const [open, setOpen] = useState(false);

    const  toggleSideBar = () => {
      setOpen(!open);
    };

    return (
        <div className="sideBarWhole">

            <div className="hamburgerSideBar" onClick={toggleSideBar}>
                <Image
                    src="/hamburger.png"
                    alt="Hamburger Icon"
                    width={30}
                    height={30}  
                />
            </div>


            <div className={`sideBar ${open ? "appear" : ""}`}>

                <div className="hamburgerSideBar" onClick={toggleSideBar}>
                    <Image
                        src="/hamburger.png"
                        alt="Hamburger Icon"
                        width={30}
                        height={30}  
                    />
                </div>


                <div className="sidebarLogo">
                    <Image
                        src="/logo.png"
                        alt="Logo Icon"
                        width={143}
                        height={37}
                    />
                </div>

                    <div className="sidebarItems">
                        <div className="sidebarItem">
                            <span>
                                <Image 
                                    src="/dashboard.png"
                                    alt="Missing Icon"
                                    width={30}
                                    height={30}
                                    className="serv"
                                /> 
                            </span>
                            
                            <Link href="/dashboard">
                                <a className="sidebarLink">
                                    Dashboard
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/missingIcon.png"
                                alt="Missing Icon"
                                width={30}
                                height={30}
                                className="serv"
                            />
                            <Link href="/dashboard/missing-item">
                                <a className="sidebarLink">
                                    Missing/Stolen
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/changeOfName.png"
                                alt="Change of name Icon"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/dashboard/change-of-name">
                                <a className="sidebarLink">
                                    Change of Name
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/declarationOfAge.png"
                                alt="Declaration Of Age Icon"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/dashboard/age-declaration">
                                <a className="sidebarLink">
                                    Declaration of Age
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/giftOfDeed.png"
                                alt="Gift Of Deed Image"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/dashboard/financial-gift-of-deed">
                                <a className="sidebarLink">
                                    Financial Gift Deed
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/powerOfAttorney.png"
                                alt="Power Of Attorney Image"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/">
                                <a className="sidebarLink">
                                    Power of Attorney
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/notarize.png"
                                alt="Notarize Image"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/dashboard/notarize-document">
                                <a className="sidebarLink">
                                    Notarize 
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/logout.png"
                                alt="Log Out"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/">
                                <a className="sidebarLink">
                                    Log Out
                                </a>
                            </Link>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default SideBar;