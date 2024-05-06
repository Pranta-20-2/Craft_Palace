import { useContext } from "react";
import { AuthContext } from "../components/Pages/AuthProvider";


const useAuth = () => {
    const all =useContext(AuthContext)
    return all;
};

export default useAuth;