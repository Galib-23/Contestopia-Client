import { Link, useLoaderData } from "react-router-dom";


const ContestDetails = () => {
    const con = useLoaderData();
    const { _id, contest_name, image, reg_count, description, prizemoney, deadline } = con;
    return (
        <div className="flex flex-col items-center mt-5 md:mt-28">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <img className="h-[450px] rounded-xl" src={image} alt="" />
                <div>
                    <h2 className="text-3xl font-bold mt-4">{contest_name}</h2>
                    <h2 className="text-xl font-semibold mt-3"><span className="text-cyan-500 font-semibold">Participants:</span> {reg_count}</h2>
                    <p>{description}</p>
                    <p className="mt-2"><span className="text-cyan-500 font-semibold">Prize:</span> {prizemoney}</p>
                    <p className="font-semibold mt-1"><span className="text-cyan-500">Deadline:</span> {deadline}</p>
                    <Link to={`/payment/${_id}`}>
                        <button className="mt-6 btn btn-outline text-cyan-400 mb-14">Register Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContestDetails;