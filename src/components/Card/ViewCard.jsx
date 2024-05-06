import { useLoaderData, useParams } from "react-router-dom";

const ViewCard = () => {
    const crafts = useLoaderData()
    const { id } = useParams();
    const craft = crafts.find(craft => craft._id == id);
    const { _id, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus,photo } = craft
    return (
        <div className=" max-w-7xl mx-auto mb-10">
            <div className="border-y-4 border-dashed my-10 mx-auto items-center">
                <p className="text-3xl font-semibold py-10 text-center animate__animated animate__lightSpeedInRight">State Details Of ID: {itemName} </p>
            </div>

            <div className=" mx-auto p-10 space-y-5">
                <img className=" rounded-lg items-center md:w-[750px] shadow-lg" src={photo} />
                <p><span className=" font-semibold">Sub Category: </span>{subcategory}</p>
                <p><span className=" font-semibold">Description: </span>{description}</p>
                <p><span className=" font-semibold">Price: </span>{price}</p>
                <p><span className=" font-semibold">Sub Category: </span>{subcategory}</p>
                <p><span className=" font-semibold">Customization: </span>{customization}</p>
                <p><span className=" font-semibold">Sub Category: </span>{subcategory}</p>
            </div>




        </div>
    );
};

export default ViewCard;