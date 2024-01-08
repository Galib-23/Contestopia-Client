import { FaLaptopCode, FaRegUser, FaTrophy, FaUsers } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { FaMapMarkedAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import useContest from "../../../Hooks/useContest";

const Statistics = () => {

    const [contest] = useContest();
    const totalContest = contest?.length;
    const [totalUsers, setTotalUsers] = useState([]);
    let totalPrize = 0;
    let totalParticipant = 0;
    for (let i = 0; i < contest?.length; i++) {
        totalPrize = totalPrize + (contest[i]?.prizemoney);
        totalParticipant = totalParticipant + (contest[i]?.reg_count);
    }
    useEffect(() => {
        fetch('http://localhost:5000/totalUsers')
            .then(res => res.json())
            .then(data => setTotalUsers(data))
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="px-6 py-14 bg-red-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><FaUsers /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">{totalUsers?.totalUsers}+</h2>
                        <p className="text-lg text-center font-semibold">Users Signed Up</p>
                    </div>
                </div>
                <div className="px-6 py-14 bg-green-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><FaLaptopCode /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">{totalContest}+</h2>
                        <p className="text-lg text-center font-semibold">Contests Arranged</p>
                    </div>
                </div>
                <div className="px-6 py-14 bg-orange-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><FaRegUser /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">{totalParticipant}+</h2>
                        <p className="text-lg text-center font-semibold">Participants Participated</p>
                    </div>
                </div>
                <div className="px-6 py-14 bg-cyan-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><FaTrophy /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">{totalPrize}+</h2>
                        <p className="text-lg text-center font-semibold">USD Prize distributed</p>
                    </div>
                </div>
                <div className="px-6 py-14 bg-yellow-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><ImOffice /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">1000+</h2>
                        <p className="text-lg text-center font-semibold">Copmanies Collaborated With</p>
                    </div>
                </div>
                <div className="px-6 py-14 bg-teal-400 rounded-xl flex items-center justify-evenly">
                    <h2 className="text-5xl"><FaMapMarkedAlt /></h2>
                    <div>
                        <h2 className="text-5xl text-center font-bold">30+</h2>
                        <p className="text-lg text-center font-semibold">Countries Are Connected</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;