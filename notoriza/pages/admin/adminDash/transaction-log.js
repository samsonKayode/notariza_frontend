import React, { useEffect, useState } from 'react';
import AdminSideBar from '../../../components/AdminSideBar';
import Image from 'next/image';
import axios from 'axios';
import { baseURL } from '../../../config/constant';


function TransactionLog() {

    const [transactionLog, setTransactionLog] = useState ([]);

    useEffect(() => {
        getTransactionLog();
    }, []);

    const getTransactionLog = async () => {
        const [today, yesterday] = [new Date(), new Date()];
        const todaydd = String(today.getDate()).padStart(2, '0');
        const todaymm = String(today.getMonth() + 1).padStart(2, '0');
        const todayyyyy = today.getFullYear();
        yesterday.setDate(today.getDate() - 1)
        const yesterdaydd = String(yesterday.getDate()).padStart(2, '0');
        const yesterdaymm = String(yesterday.getMonth() + 1).padStart(2, '0');
        const yesterdayyyyy = yesterday.getFullYear();
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/logs/list`,
            method: 'GET',
            params : {  
                startDate : `${yesterdayyyyy}/${yesterdaymm}/${yesterdaydd}`,
                endDate : `${todayyyyy}/${todaymm}/${todaydd}`
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
        console.log(response);
        setTransactionLog(response);
    }
    return(
        <div className="dashContainer">
            <AdminSideBar />

            <div className="dashboard">
                <div className="missingItem">

                    <header className="dashboardHeader          missingItemHeader">
                        <h2>Transaction Log</h2>
                        
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
                            <th>Start Date</th>
                            <th>Reference</th>
                            <th>Service Type</th>
                            <th>status</th>
                        </tr>

                        {transactionLog.map((data) => {
                            return <tr>
                                        <td>{data.id}</td>
                                        <td>{(new Date(data.date)).toDateString()}</td>
                                        <td>
                                            <span className="tooltip">
                                                reference
                                                <span class="tooltiptext">{data.reference}</span>
                                            </span>
                                        </td>
                                        <td>{data.service}</td>
                                        <td>{data.status}</td>
                                    </tr>
                        })}
                        
                    </table>
                    
                </div>

             
            </div>
        </div>
    )
}

export default TransactionLog;