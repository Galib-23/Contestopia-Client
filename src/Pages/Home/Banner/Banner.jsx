import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../../assets/banner.jpg';
const Banner = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const handleSearch = e => {
        e.preventDefault();
        if(searchInput === 'gaming' || searchInput === 'business' || searchInput === 'medical' || searchInput === 'article'){
            navigate(`allcontest/${searchInput}`);
            setSearchInput('');
        }
        else{
            navigate('/blank');
        }
        
        
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-overlay bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <div className='flex justify-center'>
                    <img className='w-2/3' src={banner} alt="" />
                    </div>
                    <p className="mb-5 text-black">Where Dreams Compete! Unleash your talents, showcase your skills, and embrace the spirit of <br /> competition. Join us in a world where contests come alive, offering <br /> a platform to shine, excel, and triumph.</p>
                    <div className="join">
                        <input className="w-72 text-black input input-bordered join-item" placeholder="Search Contests(use tags)"
                         name='search'
                         value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                         />
                        <button onClick={handleSearch} className="btn btn-secondary bg-cyan-600 border-none join-item">Search</button>
                    </div>
                    <p className='text-center mt-3'><span className='font-bold text-black'>Suggested tags:</span> <span className='text-gray-600'>gaming, article, medical, business</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;