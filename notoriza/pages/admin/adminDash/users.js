import React, { useEffect, useState} from 'react';
import AdminSideBar from '../../../components/AdminSideBar';
import Image from 'next/image';
import axios from 'axios';
import { baseURL } from '../../../config/constant';


function Users() {


    const [users, setUsers] = useState ([]);
    const [email, setEmail] = useState("");
    const [search, setSearch] = useState('');


    const updateSearch = e => {
        setSearch(e.target.value);
      }
      const getSearch = e => {
        e.preventDefault();
        setEmail(search);
      }

    useEffect(() => {
        getUsers();
    }, [email]);

    const getUsers = async () => {
        const token = JSON.parse(localStorage.getItem("userData")).data.token
        const response = (await axios.request({
            url: `${baseURL}/admin/user/find/email`,
            method: 'GET',
            params : {  
                email
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data;
        console.log(response);
        setUsers([response]);
    }

   

    return(
        <div className="dashContainer">
            <AdminSideBar />

            <div className="dashboard">
                <div className="missingItem">

                <header className="dashboardHeader  missingItemHeader">
                        <h2>Users</h2>
                        
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

                <form onSubmit={getSearch} className="search-form">
                    <input type="text" placeholder="Enter User Email" className="search-bar" value={search} onChange={updateSearch} />
                    <button
                    type="submit"
                    className="search-button">
                    Search
                        </button>
                </form>

                    <table>
                        <tr className="tableHeader">
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    {users.map((data) => {
                        return <tr>
                                    <td>{data.id}</td>
                                    <td>{data.lastname} {data.firstname}</td>
                                    <td>{(new Date(data.dob)).toDateString()}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.username}</td>
                                    <td>{data.address}</td>
                                </tr>
                    })}
                        
                    </table>
                    
                </div>

             
            </div>
        </div>
    )
}

export default Users;