import { useLoaderData } from "react-router-dom";
import CraftCard from "../Card/CraftCard";

const AllCraft = ({ selectedSubCategory }) => {
    const crafts = useLoaderData();
    const filteredCrafts = selectedSubCategory
        ? crafts.filter((craft) => craft.subcategory === selectedSubCategory)
        : crafts;

    return (
        <div className="max-w-7xl mx-auto mb-10">
            <p className=" text-center font-semibold text-3xl my-5">Craft Details: {filteredCrafts.length}</p>
            <div className="grid md:grid-cols-3 gap-10 my-12">
                {
                filteredCrafts.map((craft) => (
                    <CraftCard key={craft._id} craft={craft} />
                ))}
            </div>
        </div>
    );
};

export default AllCraft;
