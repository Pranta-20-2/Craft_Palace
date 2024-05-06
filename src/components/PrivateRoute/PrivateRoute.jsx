import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
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



    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />;
    }

    return children;
};

export default PrivateRoute;
