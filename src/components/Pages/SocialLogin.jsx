import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const SocialLogin = () => {
    const { googleLogin, gitLogin } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    console.log(result.user);
                    navigate(location?.state || '/');
                }

                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })


            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }
    return (
        <div>

            <div>
                <div className=" text-center mt-5 flex items-center justify-center gap-4">
                    <button onClick={() => {handleSocialLogin(googleLogin)}} className=" btn btn-circle btn-outline"><FaGoogle className=" text-2xl"></FaGoogle></button>
                    <button onClick={() => {handleSocialLogin(gitLogin)}} className=" btn btn-circle btn-outline"><FaGithub className=" text-3xl"></FaGithub></button>
                </div>
            </div>

        </div>
    );
};

export default SocialLogin;