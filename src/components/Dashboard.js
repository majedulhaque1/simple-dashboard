import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile bg-gray-100">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h1 className='text-3xl text-green-400 text-center'>Welcome To Dashboard</h1>
            <Outlet/>
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {admin && <li><Link to='/dashboard/products'>Products</Link></li>}
            {admin && <li><Link to='/dashboard/addproducts'>Add Product</Link></li>}
            {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
            <li><Link to='/orders'>Orders</Link></li>
            </ul>
        </div>
        </div>
    );
};

export default Dashboard;