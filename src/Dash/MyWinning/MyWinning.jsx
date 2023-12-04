import { useContext } from "react";
import useRegistered from "../../Hooks/useRegistered";
import { AuthContext } from "../../Providers/AuthProvider";


const MyWinning = () => {
    const { user } = useContext(AuthContext);
    const [registered] = useRegistered();
    const myRegistered = registered?.filter(reg => reg.reg_by === user?.email);
    const myReg = myRegistered.slice(0, 2);
    return (
        <div>
            <h2 className="text-4xl font-extrabold mb-5">My Winning Contests </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>(-)</th>
                            <th>Contest Name</th>
                            <th>Total Participations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myReg?.map(reg =>
                            <tr key={reg._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={reg.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {reg.contest_name}
                                </td>
                                <td>{reg.reg_count}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWinning;