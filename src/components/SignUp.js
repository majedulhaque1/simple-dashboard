import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, reset} = useForm();
    const [createUserWithEmailAndPassword, cUser , loading, cError ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uError ] = useUpdateProfile(auth);
    const [user, sloading, sError ] = useAuthState(auth);
    const navigate = useNavigate();
    const token = useToken(user || cUser);
    const handleSignUp = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
        reset();
    }
    
    if(token | user) {
        navigate('/dashboard');
    }
    if(loading || updating || sloading){
        return <p>Loading...</p>
    }
    return (
        <section className='container flex justify-center items-center mx-auto w-full h-screen'>
            <div className='wrapper p-5 w-96 h-auto'>
            <form onSubmit={handleSubmit(handleSignUp)} className='w-full bg-white flex flex-col justify-evenly items-center shadow-2xl shadow-gray-300 h-auto rounded-lg border-green-400 p-5 border-1' action="">
            <div className='from-title'>
                <h2 className='text-3xl text-green-400 text-center py-5'>Sign Up</h2>
            </div>
            <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('name',{required:true} )} type="text" placeholder="Name here" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('email',{required:true} )} type="email" placeholder="info@site.com" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('password',{required:true} )} type="password" placeholder="info@site.com" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <input type="submit" value="Sign Up" className='bg-green-400 text-white px-2 py-1 rounded-md mx-auto w-20 block mt-4' />
            </div>
            <p className='text-sm text-center py-4'>Already have an account please <Link className='text-green-400' to='/login'>login</Link></p>
            </form>
            </div>
        </section>
    );
};

export default SignUp;