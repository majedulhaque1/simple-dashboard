import React, {useEffect, useState} from 'react';

const UserRow = ({users, userinfo}) => {
    const [loading, setLoading] = useState(false);
    const handleMakeAdmin = (email) => {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                method: 'PUT',
                headers:{
                    'content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data));
    }
        const handleDelete = (id) => {
            const confirm = window.confirm();
            console.log(confirm);
            if(confirm === true){
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'contect-type' : 'applicattion/json'
                    }
                })
                .then(res => {
                    res.json()
                    console.log(res);
                })
                .then(data => {
                    console.log(data);
                    // if(data.deletedCount === 1){
                    //     users.splice(id, id);
                    //     // setLoading(true);
                    // }else{
                    //     // setLoading(false);
                    // }
                })
            }
        }
    
        return (
        <tr>
            <th>{userinfo?.index}</th>
            <td>{userinfo?.email}</td>
            <td>{ userinfo.role !== 'admin' && <button onClick={() => handleMakeAdmin(userinfo.email)} className='btn text-white btn-xs btn-accent'>Male admin</button>}</td>
            <td><button onClick={() => handleDelete(userinfo._id)} className='btn text-white btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default UserRow;