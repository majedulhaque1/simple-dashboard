import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useToken from '../hooks/useToken';

const Login = () => {
    const {register, handleSubmit} = useForm();
    const [signInWithEmailAndPassword, sUser, loading, sError] = useSignInWithEmailAndPassword(auth);
    const [user, uloading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const token = useToken(user || sUser);
    console.log(user);
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        console.log(data);
    }
    useEffect(()=> {
        if(sUser || user){
            navigate(from, {replace:true})
        }
    },[from, navigate, sUser, user]);

    // if(loading || uloading){
    //     return <p>Loading...</p>
    // }
    return (
        <section className='container flex justify-center items-center mx-auto w-full h-screen'>
            <div className='wrapper p-4 w-96 h-auto'>
            <form onSubmit={handleSubmit(handleLogin)} className='w-full bg-white flex flex-col justify-evenly items-center shadow-2xl shadow-gray-300 h-auto rounded-lg border-green-400 p-5 border-1' action="">
            <div className='from-title'>
                <h2 className='text-3xl text-green-400 text-center py-5'>Login</h2>
            </div>
            <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('email', {required: true})} type="email" placeholder="Name here" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('password', {required: true, minLength: 0 ,maxLength: 20})} type="password" placeholder="info@site.com" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <input type="submit" value="Login" className='bg-green-400 text-white px-2 py-1 rounded-md mx-auto w-20 block mt-4' />
            </div>
            <p className='text-sm text-center py-4'>Don't have have an account please <Link className='text-green-400' to='/signup'>Create account</Link></p>
            </form>
            </div>
        </section>
    );
};

export default Login;