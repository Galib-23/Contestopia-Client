import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useContest from "../../Hooks/useContest";

const ManageContest = () => {
    const [contest] = useContest();
    const axiosSecure = useAxiosSecure();
    const handleStatus = (con) => {
        axiosSecure.patch(`/contest/ut/${con._id}`)
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl font-bold">All Contests</h2>
                <h2 className="text-3xl font-bold">Total Contests: {contest?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Contest Name</th>
                            <th>Tag</th>
                            <th>Registered</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contest?.map(con =>
                            <tr key={con._id}>
                                <td>
                                    {con.contest_name}
                                </td>
                                <td>{con.tag}</td>
                                <td>
                                    {con.reg_count}
                                </td>
                                <td>
                                    {
                                        (con.status === 'accepted')
                                        ? <p className="text-green-600 font-bold">Accepted</p>
                                        : <button className="text-red-600 font-bold" onClick={()=>handleStatus(con)}>Pending</button>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContest;