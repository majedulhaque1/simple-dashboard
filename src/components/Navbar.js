import React from 'react';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div className='container-fluid bg-green-400 flex justify-between items-center h-16'>
            <h2>logo</h2>
             {user && <button onClick={logOut} className='text-xl btn btn-error flex justify-end'>Sign Out</button>}
            {!user && <Link to='/login'> <button className='text-xl btn btn-error flex justify-end'>Login Out</button> </Link>}
            {user && <li className='btn btn-primary'><Link to='/dashboard'>Dashboard</Link></li>}
        </div>
    );
};

export default Navbar;