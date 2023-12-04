import oops from '../assets/oops.png';

const Blank = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-3/4' src={oops} alt="" />
            <h2 className="text-4xl font-extrabold text-red-600 mt-10">You Searched Wrong Tags</h2>
            <p className='text-2xl font-bold mt-10'><span className='text-blue-700'>Suggested Tags:</span> gaming, article, business, medical</p>
        </div>
    );
};

export default Blank;