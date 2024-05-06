import { useState } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Banner from "./Banner";
import AllCraft from "../Pages/AllCraft";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleSubCategoryChange = (subcategory) => {
        setSelectedSubCategory(subcategory);
    };

    return (
        <div className="max-w-7xl mx-auto mb-10">
            <div className="h-full">
                <Banner />
            </div>
            <div className=" my-10">
                <p className=" text-center my-10 text-5xl font-bold animate__animated animate__bounce animate__slow">Our Services</p>
                <div>
                    <p className=" text-center my-10 text-xl border-y-4 border-dashed p-6 max-w-[600px] mx-auto" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Find Your Perfect Property: Explore a Diverse Range of Homes, Apartments, and Investment Opportunities. Your Journey to Homeownership Starts Here!</p>
                </div>
                <div className=" text-center">
                    <Fade cascade>
                        <ul className=" text-xl">
                            <li className="text-blue-400">A beautiful landscape painting  </li>
                            <li>capturing the vibrant colors of a sunset</li>
                            <li className=" text-green-400">over the mountains.</li>
                        </ul>
                    </Fade>
                </div>
            </div>

            <div className="flex items-center justify-center text-center">
                <div>
                    <p className=" text-3xl font-bold">Select Sub Category</p>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="m-1 text-3xl">
                        <IoIosArrowDropdown />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li onClick={() => handleSubCategoryChange("")}>
                            <Link to="/">All</Link>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Landscape Painting")}>
                            <a>Landscape Painting</a>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Portrait Drawing")}>
                            <a>Portrait Drawing</a>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Watercolour Painting")}>
                            <a>Watercolour Painting</a>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Oil Painting")}>
                            <a>Oil Painting</a>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Charcoal Sketching")}>
                            <a>Charcoal Sketching</a>
                        </li>
                        <li onClick={() => handleSubCategoryChange("Cartoon Drawing")}>
                            <a>Cartoon Drawing</a>
                        </li>
                    </ul>
                </div>
            </div>



            <div >
                <AllCraft selectedSubCategory={selectedSubCategory} />
            </div>
        </div>
    );
};

export default Home;
