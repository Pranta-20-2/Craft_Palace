import 'animate.css';
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
    const { _id, itemName, subcategory, description, price, rating, customization, processingTime, stockStatus,photo } = craft
    return (
        <div>
            <Link to={`/cardDet/${_id}`}>
                <div data-aos="flip-left">
                    <div className="card w-96 bg-base-100 shadow-xl h-full animate__animated animate__pulse animate__infinite animate__slower relative" >
                        <figure className="px-5 pt-5">
                            <img src={photo} className="rounded-xl h-[250px]" />
                        </figure>
                        <div className={`absolute top-5 right-7 px-3 py-2 rounded-lg ${customization === 'Yes' ? ' bg-green-400' : customization === 'No' ? ' bg-red-400' : ''} `}>
                            {customization}
                        </div>
                        <div className="card-body space-y-4" >
                            <h2 className="card-title">Item: {itemName}</h2>
                            <p>Description: {description}</p>
                            <p>Sub Category: {subcategory}</p>
                            <p>Price: {price}</p>
                            <Link to={`/cardDet/${_id}`} className="card-actions items-end">
                                <button className="btn btn-primary w-full">View details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Link>
        </div>

    );
};

export default CraftCard;