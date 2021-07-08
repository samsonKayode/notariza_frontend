import React, { useState, useEffect} from 'react';
import AdminSideBar from '../../../components/AdminSideBar';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { baseURL } from '../../../config/constant';

function UserType() {

    const [userType, setUserType] = useState ([]);

    useEffect(() => {
        getUserType();
    }, []);

    const getUserType = async () => {
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/roles/list`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
        setUserType(response);
        console.log(userType);
    }

    return(
        <div className="dashContainer">
            <AdminSideBar />

            <div className="dashboard">
                <div className="missingItem">

                <header className="dashboardHeader missingItemHeader">
                        <h2>User Type</h2>
                        
                        <div className="dashIdentity">
                            <span className="dashIdentityName">Tola Olu</span>
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
                    <Link href="/admin/adminDash/create-new-user">
                        <span className="createUserbtnbody">
                            <button type="submit" className="createUserbtn">Create new user type</button>
                        </span>
                        
                    </Link>
                    

                    <table>
                        <tr className="tableHeader">
                            <th>ID</th>
                            <th>User Type</th>
                        </tr>

                        {userType.map((data) => {
                            return <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                    </tr>
                        })}
                        
                    </table>
                    
                </div>

             
            </div>
        </div>
    )
}

export default UserType;