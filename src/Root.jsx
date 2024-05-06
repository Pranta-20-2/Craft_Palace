import { Outlet } from "react-router-dom";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const Root = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const controlTimeout = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(controlTimeout);
    }, []);

    if (showLoading) {
        return (
            <div className=" text-center flex flex-col max-h-screen items-center h-[512px]  justify-center ">

                <HashLoader color="#36d7b7" />
                <p className=" text-xl font-semibold mt-4">   Loading....</p>
            </div>
        );
    }
    return (
        <div className=" font-poppins ">
            <div className=" bg-[#F4F3F0]">
            <NavBar></NavBar>
            </div>
           
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;