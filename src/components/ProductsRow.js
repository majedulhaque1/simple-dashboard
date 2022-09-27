import React from 'react';

const ProductsRow = ({productinfo}) => {
    // console.log(productinfo);
    const handleDelete = (id) => {
        const confirm = window.confirm();
        console.log(confirm);
        if(confirm === true){
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'contect-type' : 'applicattion/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }
    return (
        <tr>
            <td><img className='w-20 h-16' src="" alt="" /></td>
            <td>{productinfo.name}</td>
            <td>{productinfo.url}</td>
            <td>{productinfo.des}</td>
            <td>update Stock</td>
            <td><button onClick={() => handleDelete(productinfo._id)} className='btn btn-error'>Delete</button></td>
        </tr>
    );
};

export default ProductsRow;