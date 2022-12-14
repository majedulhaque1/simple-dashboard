import { useState, useEffect } from "react";

const useToken = (user) =>{
    const [token, setToken] = useState('');
    console.log(token);

    useEffect(() =>{
        const email = user?.email;
        console.log(email);
        const currentUser = {email: email};
        if(email){
            
            fetch(`http://localhost:5000/users/${email}`,{
                method: "PUT",
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        }
        
    },[user])
    return [token];
}
export default useToken;