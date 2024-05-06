import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2'
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { email, password } = data;


        if (password.length < 6) {
            toast.error('Password Should be at least 6 characters or longer')
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one Uppercase letter ')
            return;
        }

        createUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')
                }
                    Swal.fire({
                        title: 'Success!',
                        text: 'Register Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

            })
            .catch(error => {
                toast.error(error.message)

            })


    }
    return (
        <div className="hero min-h-screen bg-base-200 max-w-7xl mx-auto ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered"  {...register("fullName", { required: true })} />
                            {errors.fullName && <p className=" text-red-500">Full name is Required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered"  {...register("email", { required: true })} />
                            {errors.email && <p className=" text-red-500">Email is Required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered"  {...register("image", { required: true })} />
                            {errors.image && <p className=" text-red-500">Image is Required</p>}
                        </div>

                        <div className=" relative">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" required {...register("password", { required: true })} />
                                {errors.password && <p className=" text-red-500">Password is Required</p>}

                            </div>
                            <span onClick={() => setShowPass(!showPass)} className=" absolute top-12 right-4 text-lg" >
                                {
                                    showPass ? <FaEye></FaEye> : <IoEyeOffSharp></IoEyeOffSharp>
                                }
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" {...register("terms", { required: true })} />

                            <label htmlFor="terms">Accept our <a className=" text-blue-400 underline" href="">terms and condition</a></label>
                        </div>
                        {errors.terms && <p className=" text-red-500">Checked terms and condition</p>}


                        <div className="form-control mt-6">
                            <button className="btn btn-primary animate__animated animate__pulse animate__infinite">Register</button>
                        </div>
                    </form>

                    <p className="text-center mb-5">Already have an account? Please <span className="font-semibold text-blue-400 underline"><Link to='/login'>LogIn</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;