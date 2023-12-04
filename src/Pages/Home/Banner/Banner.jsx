import { useState } from 'react';
import banner from '../../../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';

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
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Contestopia</h1>
                    <p className="mb-5">Where Dreams Compete! Unleash your talents, showcase your skills, and embrace the spirit of competition. Join us in a world where contests come alive, offering a platform to shine, excel, and triumph.</p>
                    <div className="join">
                        <input className="w-72 text-black input input-bordered join-item" placeholder="Search Contests(use tags)"
                         name='search'
                         value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                         />
                        <button onClick={handleSearch} className="btn btn-secondary bg-yellow-600 border-none join-item">Search</button>
                    </div>
                    <p className='text-center'><span className='font-bold text-yellow-200'>Suggested tags:</span> gaming, article, medical, business</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;