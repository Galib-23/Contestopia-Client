import { useContext } from "react";
import useRegistered from "../../Hooks/useRegistered";
import { AuthContext } from "../../Providers/AuthProvider";


const MyReg = () => {
    const [registered] = useRegistered();
    const {user} = useContext(AuthContext);
    const myRegistered = registered?.filter(reg => reg.reg_by === user?.email);
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-7">Total Registered: {myRegistered.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>(-)</th>
                            <th>Contest Name</th>
                            <th>Total Registered</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myRegistered?.map(reg =>
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
                                <td>{reg.deadline}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReg;