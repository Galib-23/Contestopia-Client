import microsoft from '../../../assets/microsoft.png';
import google from '../../../assets/google.png';
import facebook from '../../../assets/facebook.png';
import openai from '../../../assets/openai.png';
const Ad = () => {
    return (
        <div className='mt-36 mb-24'>
            <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">OUR SPONSORS</h2>
            <p className='text-center mb-12'>
                Connecting all company employees through a unified media platform can significantly enhance communication, <br /> collaboration, and overall productivity within an organization. By leveraging a centralized <br /> medium, businesses can break down communication barriers, foster a sense of community, <br /> and streamline information flow across all departments and hierarchies.
            </p>
            <div className='bg-gray-900 bg-opacity-30 rounded-2xl flex flex-col md:flex-row justify-evenly items-center p-6'>
                <img className='w-44 md:w-56' src={openai} alt="" />
                <img className='w-44 md:w-56' src={google} alt="" />
                <img className='w-44 md:w-56' src={facebook} alt="" />
                <img className='w-44 md:w-56' src={microsoft} alt="" />
            </div>
        </div>
    );
};

export default Ad;