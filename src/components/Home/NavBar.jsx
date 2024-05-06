import { useEffect, useState } from "react";
import AOS from 'aos';
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {
    const [theme, setTheme] =useState('light')
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    const handleToggle = (e)=>{
        if(e.target.checked){
            setTheme('synthwave')
        }
        else{
            setTheme('light')
        }
    } 
    const { logOut, user } = useAuth()
    useEffect(() => {
        AOS.init();
    }, [])
    const NavLinks =
        <>
            <li>
                <NavLink to={'/'}
                    className={({ isActive }) => isActive ?
                        ' text-green-400 font-semibold border-2 border-green-500 '
                        : 'text-green-400'
                    }>
                    Home
                </NavLink>
            </li>
            {
                user &&
                <>
                    <li>
                        <NavLink to={'/addCraft'}
                            className={({ isActive }) => isActive ?
                                ' text-green-400 font-semibold border-2 border-green-500 '
                                : 'text-green-400 '
                            }>
                            Add Craft
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/allCraft'}
                            className={({ isActive }) => isActive ?
                                ' text-green-400 font-semibold border-2 border-green-500 '
                                : 'text-green-400'
                            }>
                            All Craft
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/myCart'}
                            className={({ isActive }) => isActive ?
                                ' text-green-400 font-semibold border-2 border-green-500 '
                                : 'text-green-400'
                            }>
                            My Cart
                        </NavLink>
                    </li>
                </>
            }
            <li>
                <NavLink to={'/about'}
                    className={({ isActive }) => isActive ?
                        ' text-green-400 font-semibold border-2 border-green-500 '
                        : 'text-green-400'
                    }>About Us
                </NavLink>
            </li>


        </>
    return (
        <div className="navbar max-w-7xl mx-auto mb-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <a className=" font-semibold text-4xl p-0">CRAFT <span className=" text-green-400 text-2xl">PALACE</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end flex flex-col md:flex-row items-end md:items-center md:gap-6">
                {
                    user ?
                        <div className="md:flex items-center gap-3">

                            <div className="tooltip tooltip-left" data-tip={
                                user?.displayName || "user not found"
                            }>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocIiDN4UKH9JbBA2f7B7LaPpB_uCP8tLxs0SqT2M8W1MSAk4kMOX=s96-c"} />
                                    </div>
                                </label>
                            </div>
                            <div className="animate__animated animate__pulse animate__infinite  ">
                                <NavLink onClick={logOut}
                                    className={({ isActive }) => isActive ?
                                        ' text-green-400 font-semibold border-2 border-green-500 px-5 py-1 rounded-lg hover:bg-red-400'
                                        : 'text-green-400'
                                    }>Logout
                                </NavLink>
                            </div>



                        </div>
                        :
                        <>
                            <NavLink to={'/login'}
                                className={({ isActive }) => isActive ?
                                    ' text-green-400 font-semibold border-2 border-green-500 px-5 py-1 rounded-lg'
                                    : 'text-green-400'
                                }>LogIn
                            </NavLink>
                            <NavLink to={'/register'}
                                className={({ isActive }) => isActive ?
                                    ' text-green-400 font-semibold border-2 border-green-500 px-5 py-1 rounded-lg'
                                    : 'text-green-400'
                                }>Register
                            </NavLink>

                        </>

                }
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;