import { TbRefresh } from 'react-icons/tb';
import { FaTruck } from 'react-icons/fa';
import { AiTwotoneLock } from 'react-icons/ai';
import Marquee from "react-marquee-slider";
// import { Helmet } from 'react-helmet-async';

const About = () => {

    return (
        <>
            <div className="px-8 py-12 text-center">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="my-6">
                    Behind every successful real estate transaction is a team that cares - welcome to ours;
                    <br />
                    From the first showing to the final signature, let us guide you through the journey of finding your perfect home sweet home. Every house has a story; let us help you find the one that becomes yours.
                </p>
                <Marquee pauseOnHover speed={100}>
                    <p className="mr-12">Welcome to our real estate journey - where dreams become addresses and houses become homes.
                    </p>
                    <p className="mr-12" >Like finding the perfect home, our story is one of destiny - let us help you write yours.</p>
                    <p className="mr-12">Our passion for real estate is not just about bricks and mortar; it is about building futures and creating memories.</p>
                </Marquee>
                <br />
                <hr />
                <br />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="single-shipping">
                            <TbRefresh className='text-center font-bold text-5xl mx-auto' />
                            <h3>After deal Customer service </h3>
                        </div>
                        <div className="single-shipping">
                            <FaTruck className='text-center font-bold text-5xl mx-auto' />
                            <h3>FREE SHIPPING</h3>
                        </div>
                        <div className="single-shipping">
                            <AiTwotoneLock className='text-center font-bold text-5xl mx-auto' />
                            <h3>SECURE PAYMENT</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;