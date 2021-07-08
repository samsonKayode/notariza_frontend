import React, { useEffect, useState } from 'react';
import AdminSideBar from '../../../components/AdminSideBar';
import Image from 'next/image';
import axios from 'axios';
import { baseURL } from '../../../config/constant';

function AwaitingConfirmation() {
    
    const [awaitingConfirmationItems, setAwaitingConfirmationItems] = useState ([]);

    useEffect(() => {
        getAwaitingConfirmationItems();
    }, []);

    const getAwaitingConfirmationItems = async () => {
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/requests/pending/list`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
        setAwaitingConfirmationItems(response);
        console.log(awaitingConfirmationItems);
    }

    return(
        <div className="dashContainer">
            <AdminSideBar />

            <div className="dashboard">
                <div className="missingItem">

                    <header className="dashboardHeader missingItemHeader">
                        <h2>Awaiting Confirmation</h2>
                        
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

                    <table>
                        <tr className="tableHeader">
                            <th>S/N</th>
                            <th>Date</th>
                            <th>Service Type</th>
                            <th>Customer name </th>
                            <th>Customer ID</th>
                            <th>Action</th>
                        </tr>

                        {awaitingConfirmationItems.map((data) => {
                            return <tr>
                                        <td>
                                            <span className="tooltip">
                                                {data.id}
                                                <span class="tooltiptext">{data.reference}</span>
                                            </span>
                                        </td>
                                        <td>{(new Date(data.date)).toDateString()}</td>
                                        <td>{data.service}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.customerID}</td>
                                        <td><button className="tableButton">
                                            <Image
                                                src="/doneTwo.png"
                                                alt="done Icon"
                                                width={12}
                                                height={12}
                                            />
                                Approve</button> <button className="tableButton">
                                            <Image
                                                src="/close.png"
                                                alt="close Icon"
                                                width={12}
                                                height={12}
                                            />
                                    Deny</button></td>
                                    </tr>
                        })}
                        
                    </table>

                </div>

             
            </div>
        </div>
    )
}

export default AwaitingConfirmation;