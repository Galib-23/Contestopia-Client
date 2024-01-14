import expectrum from '../../assets/expectrum.png';
import { FaCamera, FaMedal, FaTrophy } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
const Pricing = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${expectrum})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    <div className="">
                        <h2 className='text-4xl text-white font-bold text-center'>Four Apps One Dashboard!</h2>
                        <p className='text-white text-xl font-semibold text-center mb-20 mt-4'>Get the most out of Contestopia by getting all apps in a single package.</p>
                        <div className='px-10 py-16 bg-base-100 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between'>
                            <div className='space-y-3'>
                                <h2 className='text-2xl font-bold text-center md:text-left'>Full Package</h2>
                                <p className='text-lg text-gray-500 text-center md:text-left'>Complete Access to all appps</p>
                                <div className='grid grid-cols-2 gap-2'>
                                    <button className="btn btn-outline text-green-500"><FaTrophy />Competetions</button>
                                    <button className="btn btn-outline text-red-500"><FaMedal />Rewards</button>
                                    <button className="btn btn-outline text-blue-500"><FiGrid />Gallery</button>
                                    <button className="btn btn-outline text-yellow-500"><FaCamera />Captures</button>
                                </div>
                            </div>
                            <div className='space-y-3 mt-5 md:mt-0'>
                                <h2 className='text-2xl font-extrabold'>$80/month</h2>
                                <button className="btn text-cyan-400 btn-outline btn-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <h2 className='text-4xl font-bold text-cyan-500 mt-10 text-center mb-3'>Or Buy Each App Inidvidually</h2>
                <p className='text-xl font-semibold text-gray-500 text-center mb-14'>Only pay for what you need, no lock-in contracts, downgrade whenever.</p>
                <div className='mx-2 md:mx-32 space-y-7'>
                    <div className='flex flex-col md:flex-row items-center justify-between bg-base-200 rounded-2xl shadow-lg p-10'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold flex items-center text-green-500'><FaTrophy />Competetions</h2>
                            <p>Easily set up and run giveaways, contests & sweepstakes that drive real user engagement.</p>
                            <button className="btn text-cyan-400 btn-outline btn-sm">View Pricing</button>
                        </div>
                        <h2 className='text-4xl font-bold'>$10/month</h2>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between bg-base-200 rounded-2xl shadow-lg p-10'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold flex items-center text-red-500'><FaMedal />Rewards</h2>
                            <p>Create unlockable rewards using millions of action combinations in minutes.</p>
                            <button className="btn text-cyan-400 btn-outline btn-sm">View Pricing</button>
                        </div>
                        <h2 className='text-4xl font-bold'>$10/month</h2>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between bg-base-200 rounded-2xl shadow-lg p-10'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold flex items-center text-blue-500'><FiGrid />Gallery</h2>
                            <p>Collect, curate & display the content that matters to your business.</p>
                            <button className="btn text-cyan-400 btn-outline btn-sm">View Pricing</button>
                        </div>
                        <h2 className='text-4xl font-bold'>$10/month</h2>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-between bg-base-200 rounded-2xl shadow-lg p-10'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold flex items-center text-yellow-500'><FaCamera />Captures</h2>
                            <p>Target beautiful messages or opt-in forms to right users at the right time to build your email list & grow your business.</p>
                            <button className="btn text-cyan-400 btn-outline btn-sm">View Pricing</button>
                        </div>
                        <h2 className='text-4xl font-bold'>$10/month</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;