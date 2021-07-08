import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SideBar from '../../components/SideBar';
import axios from 'axios';
import { baseURL } from '../../config/constant';
import withAuth from '../../config/withAuth';
function Dashboard() {

    const [dashList, setDashList] = useState([]);

    useEffect(() => {
        getDashTableItems();
    }, [])

   

    const getDashTableItems = async () => {
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/service/logs/list`,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
        setDashList(response);
    }

    const getItemDownload = async ({target : {id}}) => {
        console.log(id);
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        try {
            const response = (await axios.request({
                url: `${baseURL}/service/files/view?fileName=${id}.pdf`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })).data;
            console.log(response);
        }
        catch (error) {

        }
        
    }


    return (
        <div className="dashContainer">
            <SideBar />

            <div className="dashboard dashIndex">
                <header className="dashboardHeader">
                    <h2>Dashboard</h2>

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

                <div>
                    <div className="dashEnquiry">
                        <p>Hello, Samson</p>
                        <h3>What would you like to do today?</h3>
                    </div>

                    <section className="dashItems">
                        <div className="dashItem">
                            <h3>Missing stolen items</h3>
                            <h2>1</h2>
                        </div>

                        <div className="dashItem">
                            <h3>Change of Name</h3>
                            <h2>0</h2>
                        </div>

                        <div className="dashItem">
                            <h3>Declaration of Age</h3>
                            <h2>0</h2>
                        </div>

                        <div className="dashItem">
                            <h3>Financial Gift Deed</h3>
                            <h2>0</h2>
                        </div>

                        <div className="dashItem">
                            <h3>Power of Authority</h3>
                            <h2>1</h2>
                        </div>

                        <div className="dashItem">
                            <h3>Notarize Documents</h3>
                            <h2>0</h2>
                        </div>
                    </section>

                    <section className="dashTableSection">
                        <h3>Activities</h3>
                            {dashList.map((data) => (
                                <div className="contactLists container">
                                    <div className="contactList">
                                        <h3 className="contactListTitle">No.</h3>
                                        <p className="contactListObj">{data.id}</p>
                                    </div>

                                    <div className="contactList">
                                        <h3 className="contactListTitle">Service</h3>
                                        <p className="contactListObj">{data.service}</p>
                                    </div>

                                    <div className="contactList">
                                        <h3 className="contactListTitle">Reference</h3>

                                        <span className="contactListObj tooltip">
                                                reference
                                                <span class="tooltiptext">{data.reference}</span>
                                            </span>
                                    </div>

                                    <div className="contactList">
                                        <h3 className="contactListTitle">Date posted</h3>
                                        <p className="contactListObj">{(new Date(data.date)).toDateString()}</p>
                                    </div>

                                    <div className="contactList">
                                        <h3 className="contactListTitle">Status</h3>
                                        <p className="contactListObj">CONFIRMED</p>
                                    </div>

                                    <div className="contactList">
                                        <button onClick={getItemDownload} id={data.reference} className="contactListTitle">VIEW</button>
                                        <button className="contactListObj">DOWNLOAD</button>
                                    </div>
                                </div>
                            ))}

                    </section>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Dashboard);