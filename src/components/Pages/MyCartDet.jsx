import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCartDet = ({ cart }) => {
    const { _id, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus, photo } = cart
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://art-craft-server-black.vercel.app/delCrafts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            // const remaining = coffees.filter(cof => cof._id !== _id)
                            // setCoffees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <p></p>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row border-2 shadow-lg">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=' space-y-4'>
                        <h1 className="text-5xl font-bold">{itemName}</h1>
                        <p>Sub Category: {subcategory}</p>
                        <p>Description: {description} </p>
                        <p>Price: {price}</p>
                        <p>Rating: {rating} </p>
                        <p>Customization: {customization}</p>
                        <div className=''>
                            <Link to={`/crafts/${_id}`}>
                                <button className="btn join-item bg-yellow-400">Update</button>
                            </Link>
                            <button onClick={() => { handleDelete(_id) }} className='btn btn-secondary ml-3'>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyCartDet;