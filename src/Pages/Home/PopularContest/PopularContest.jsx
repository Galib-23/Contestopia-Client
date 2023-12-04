import useContest from "../../../Hooks/useContest";
import Card from "./Card";

const PopularContest = () => {
    const [contest] = useContest();
    //sorting in a descending order
    const sortedContest = contest.sort((a, b)=> b.reg_count - a.reg_count);
    const topSixContests = sortedContest.slice(0, 6);
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-extrabold text-center mb-6">Popular Contests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
                {
                    topSixContests?.map(top => <Card key={top._id} top={top}></Card>)
                }
            </div>
        </div>
    );
};

export default PopularContest;