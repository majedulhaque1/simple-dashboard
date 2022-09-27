import React, { useEffect, useState } from 'react';
import ProductsRow from './ProductsRow';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('http://localhost:5000/products',{
            method : 'GET',
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/`, {
            method: 'DELETE',
            headers: {
                'contect-type' : 'applicattion/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='overflow-x-auto'>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th></th>
                        <th>img</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>des</th>
                        <th>Update stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <ProductsRow key={product._id} productinfo={product}></ProductsRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Products;