
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import gamingCreator from '../../../assets/gaming.png';
import medicalCreator from '../../../assets/medical.png';
import businessCreator from '../../../assets/business.png';
import articleCreator from '../../../assets/article.png';


const BestContentCreator = () => {
    // const [contest] = useContest();
    // const sortedContest = contest.sort((a, b) => b.reg_count - a.reg_count);
    // const topT = sortedContest.slice(0, 3);
    return (
        <div>
            <h2 className="text-5xl text-cyan-400 font-bold text-center mt-44 mb-16">Top Contest Creators</h2>
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
                <div>
                    <img src={articleCreator} />
                </div>
            </Carousel>
        </div>
    );
};

export default BestContentCreator;