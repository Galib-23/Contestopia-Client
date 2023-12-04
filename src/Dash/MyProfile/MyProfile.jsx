import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useRegistered from "../../Hooks/useRegistered";


const MyProfile = () => {
    const {user} = useContext(AuthContext);
    const [registered] = useRegistered();
    let contestWin = 1;
    const myRegistered = registered?.filter(reg => reg.reg_by === user?.email);
    return (
        <div>
            <h2 className="text-4xl font-extrabold">Hello {user?.displayName} WellCome Back</h2>
            <h2 className="text-3xl font-bold mt-4">Total Contest Registered: {myRegistered?.length}</h2>
            <h2 className="text-3xl font-bold mt-4">Total Contest Wins: {contestWin}</h2>
            <h2 className="text-3xl font-bold mt-4">Win Percentage: {(myRegistered?.length === 0 )
            ? (0)
            :((contestWin/myRegistered?.length) * 100)} %</h2>
            

        </div>
    );
};

export default MyProfile;