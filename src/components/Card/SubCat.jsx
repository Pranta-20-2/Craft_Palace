import Swal from 'sweetalert2'
const SubCat = () => {
    const handleAddCart = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
       
        const photo = form.photo.value;
        
        const newCraft = { itemName, subcategory, description, price, photo }
        console.log(newCraft);

        // Send data to the server
        fetch('https://art-craft-server-black.vercel.app/subcat', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Sub Category Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                }
            })

    }
    return (
        <div className=" max-w-7xl mx-auto mb-10">
            <h2 className=" text-3xl font-extrabold text-center mb-10">Add Your Art & Craft Details</h2>
            <div className="card shrink-0 w-full shadow-xl bg-[#F4F3F0]">
                <form onSubmit={handleAddCart} className="card-body ">
                    {/* Form for item name & subcategory name */}
                    <div className=" md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="Item Name" name="itemName" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub Category Name</span>
                            </label>
                            <input type="text" placeholder="Sub Category Name" name="subcategory" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    {/* Form for Description & Price */}
                    <div className=" md:flex gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" name="description" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price " name="price" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    {/* Form Photo Url Row */}
                    <div className=" ">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <input type="submit" value="ADD CRAFT" className=" btn bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default SubCat;