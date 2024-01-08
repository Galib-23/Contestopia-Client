
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import gamingCreator from '../../../assets/gaming.png';
import medicalCreator from '../../../assets/medical.png';
import businessCreator from '../../../assets/business.png';


const BestContentCreator = () => {
    // const [contest] = useContest();
    // const sortedContest = contest.sort((a, b) => b.reg_count - a.reg_count);
    // const topT = sortedContest.slice(0, 3);
    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center mt-16 mb-8">Top Contest Creators</h2>
            <Carousel className="text-center min-h-screen">
                <div>
                    <img src={gamingCreator} />
                </div>
                <div>
                    <img src={medicalCreator} />
                </div>
                <div>
                    <img src={businessCreator} />
                </div>
            </Carousel>
        </div>
    );
};

export default BestContentCreator;