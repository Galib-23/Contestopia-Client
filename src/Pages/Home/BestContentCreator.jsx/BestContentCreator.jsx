
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useContest from "../../../Hooks/useContest";

const BestContentCreator = () => {
    const [contest] = useContest();
    const sortedContest = contest.sort((a, b) => b.reg_count - a.reg_count);
    const topT = sortedContest.slice(0, 3);
    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center mt-16 mb-8">Top Contest Creators</h2>
            <Carousel>
                <div>
                    <img src={topT[0]?.image} />
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-600">{topT[0]?.contest_name}</h1>
                        <h1 className="text-xl font-bold">Created By: {topT[0]?.created_by}</h1>
                    </div>
                </div>
                <div>
                    <img src={topT[1]?.image} />
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-600">{topT[1]?.contest_name}</h1>
                        <h1 className="text-xl font-bold">Created By: {topT[1]?.created_by}</h1>
                    </div>
                </div>
                <div>
                    <img src={topT[2]?.image} />
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-600">{topT[2]?.contest_name}</h1>
                        <h1 className="text-xl font-bold">Created By: {topT[2]?.created_by}</h1>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default BestContentCreator;