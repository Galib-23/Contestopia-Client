import useContest from "../../../Hooks/useContest";

const PopularContest = () => {
    const [contest] = useContest();
    //sorting in a descending order
    const sortedContest = contest.sort((a, b)=> b.reg_count - a.reg_count);
    const topSixContests = sortedContest.slice(0, 6);
    return (
        <div>
            <h2 className="text-3xl">Popular Contest</h2>
            <h2>Total Contests: {topSixContests.length}</h2>
        </div>
    );
};

export default PopularContest;