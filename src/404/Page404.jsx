import page404 from '../assets/404.jpg'
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        
        <div className=" max-w-7xl mx-auto my-10">

            <Link to={'/'}>
                <button className=" text-xl font-bold px-7 py-4 rounded-lg bg-[#23BE0A] text-white">Go Back to Home</button>
            </Link>
            <div className="flex flex-col justify-center items-center">
                <img className=' h-[400px] w-fit' src={page404} alt="" />
            </div>
            <div>
                <h2 className="text-center text-3xl font-semibold">Oppsss!!!!!!</h2>
                <h2 className="text-center text-4xl font-semibold">Page Not Found</h2>
            </div>
        </div>
    );
};

export default Page404;