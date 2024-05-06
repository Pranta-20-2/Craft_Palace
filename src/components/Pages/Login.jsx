import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "./SocialLogin";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const [showPass, setShowPass] = useState(false)
    const { signInUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { email, password } = data;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')
                }
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })

            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 max-w-7xl mx-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <p className=" text-red-500">Email is Required</p>}
                        </div>
                        <div className=" relative">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <p className=" text-red-500">Password is Required</p>}
                            </div>
                            <span onClick={() => setShowPass(!showPass)} className=" absolute top-12 right-4 text-lg" >
                                {
                                    showPass ? <FaEye></FaEye> : <IoEyeOffSharp></IoEyeOffSharp>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6 animate__animated animate__pulse animate__infinite">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p className="text-center mb-5">Do not have an account? Please <span className="font-semibold text-blue-400 underline"><Link to='/register'>Register</Link></span></p>
                    <p className=" text-center">Login With -</p>
                    <div className="form-control mx-4 mb-10">
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;