import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const {register , handleSubmit} = useForm();
    
    const handleProduct = (data) => {
        const name = data.name;
        const url = data.url;
        const des = data.des;

        const product = {name, url, des};
        console.log(product);
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json).then(data => console.log(data))
    }
    return (
        <section className='container flex justify-center items-center mx-auto w-full h-screen'>
            <div className='wrapper p-5 w-96 h-auto'>
            <form onSubmit={handleSubmit(handleProduct)} className='w-full bg-white flex flex-col justify-evenly items-center shadow-2xl shadow-gray-300 h-auto rounded-lg border-green-400 p-5 border-1' action="">
            <div className='from-title'>
                <h2 className='text-3xl text-green-400 text-center py-5'>Sign Up</h2>
            </div>
            <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Product title</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('name', {requied: true})} type="text" placeholder="Name here" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Img Url</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('url', {requied: true})} type="text" placeholder="info@site.com" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label><br />
                <label className="input-group input-group-vertical">
                    <input {...register('des', {requied: true})} type="text" placeholder="info@site.com" className="input input-bordered border border-green-400 p-1 rounded-md my-2" />
                </label>
            </div>
            <input type="submit" value="Upload" className='bg-green-400 text-white px-2 py-1 rounded-md mx-auto w-20 block mt-4' />
            </div>
            </form>
            </div>
        </section>
    );
};

export default AddProducts;