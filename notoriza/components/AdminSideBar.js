import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

function AdminSideBar () {
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
                            <Image 
                                src="/sandClock.png"
                                alt="Sand Clock Icon"
                                width={30}
                                height={30}
                                className="serv"
                            />
                            <Link href="/admin/adminDash">
                                <a className="sidebarLink">
                                    Awaiting Confirmation
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/transactionLog.png"
                                alt="Transaction Log Icon"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/admin/adminDash/transaction-log">
                                <a className="sidebarLink">
                                    Transaction Logs
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/userType.png"
                                alt="User Type Icon"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/admin/adminDash/user-type">
                                <a className="sidebarLink">
                                    User Type
                                </a>
                            </Link>
                        </div>

                        <div className="sidebarItem">
                            <Image 
                                src="/userGroup.png"
                                alt="User Group Icon"
                                width={30}
                                height={30}
                                className=""
                            />
                            <Link href="/admin/adminDash/users">
                                <a className="sidebarLink">
                                    Users
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

export default AdminSideBar;