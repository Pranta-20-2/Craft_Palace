import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const UpdateCart = () => {
    const { user } = useAuth()
    const handleUpdateCraft = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const photo = form.photo.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const email = user.email;
        const newCraft = {_id, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus, email, photo }
        console.log(newCraft);

        // Send data to the server
        fetch(`https://art-craft-server-black.vercel.app/crafts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
            })

    }
    const craftCart = useLoaderData();
    const { _id, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus, photo } = craftCart
    return (
        <div className="max-w-7xl mx-auto mb-10">
            <div className=" max-w-7xl mx-auto mb-10 p-12">
                <h2 className=" text-3xl font-extrabold text-center mb-8">Update Your Art & Craft : {itemName}</h2>
                <div className="card shrink-0 w-full shadow-xl bg-[#F4F3F0]">
                    <form onSubmit={handleUpdateCraft} className=" card-body">
                        {/* Form for item name & subcategory name */}
                        <div className=" md:flex gap-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" placeholder="Item Name" name="itemName" defaultValue={itemName} className="input input-bordered w- focus:outline-[#FF497C]" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label label-text" htmlFor="brand">
                                    Sub Category Name
                                </label>
                                <select
                                    name="subcategory"
                                    defaultValue={subcategory}
                                    id="subcategory"
                                    className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                    type="text"
                                    placeholder="Select Sub Category"
                                >
                                    <option value="Landscape Painting" selected>Landscape Painting</option>
                                    <option value="Portrait Drawing" selected>Portrait Drawing</option>
                                    <option value=" Watercolour Painting" selected> Watercolour Painting</option>
                                    <option value="Oil Painting" selected>Oil Painting</option>
                                    <option value="Charcoal Sketching" selected>Charcoal Sketching</option>
                                    <option value="Cartoon Drawing" selected>Cartoon Drawing</option>
                                </select>
                            </div>
                        </div>
                        {/* Form for Description & Price */}
                        <div className=" md:flex gap-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="description" name="description" defaultValue={description} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price " name="price" defaultValue={price} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                        </div>
                        {/* Form for Rating & Customization */}

                        <div className=" md:flex gap-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Customization </span>
                                </label>
                                <input type="text" placeholder="Customization" name="customization" defaultValue={customization} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                        </div>
                        {/* Form for Processing Time & Stock Status */}
                        <div className=" md:flex gap-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text" placeholder="Processing Time" name="processingTime" defaultValue={processingTime} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" placeholder="Stock Status " name="stockStatus" defaultValue={stockStatus} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>

                        </div>

                        {/* Form Photo Url Row */}
                        <div className=" ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" name="photo" defaultValue={photo} className="input input-bordered w-full focus:outline-[#FF497C]" required />
                            </div>
                        </div>
                        <input type="submit" value="ADD CRAFT" className=" btn bg-black text-white mt-8" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCart;