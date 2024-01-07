import useContest from "../../../Hooks/useContest";
import Card from "./Card";

const PopularContest = () => {
    const [contest] = useContest();
    //sorting in a descending order
    const sortedContest = contest.sort((a, b)=> b.reg_count - a.reg_count);
    const topSixContests = sortedContest.slice(0, 6);
    return (
        <div className="mt-12 mx-12">
            <h2 className="text-4xl font-bold text-center text-cyan-500 mb-6">Popular Contests</h2>
            <p className="text-lg text-center text-gray-600 mt-2 mb-6">Here are the top contests that are on trending. A huge amount <br /> of people have registered here. Without wasting your valuable time just register <br /> for the contest and get certified from contestopia</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
                {
                    topSixContests?.map(top => <Card key={top._id} top={top}></Card>)
                }
            </div>
        </div>
    );
};

export default PopularContest;