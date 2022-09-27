import React, {useEffect, useState} from 'react';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);
    // console.log(users);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div className='overflow-x-auto'>
            <table className='table w-full'>

            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map(user => <UserRow key={user._id} userinfo={user} users={users}></UserRow>)
                }
            </tbody>
            </table>
        </div>
    );
};

export default Users;