import { Link, useLoaderData } from "react-router-dom";


const ContestDetails = () => {
    const con = useLoaderData();
    const { _id, contest_name, image, reg_count, description, prizemoney, deadline } = con;
    return (
        <div className="flex flex-col items-center mt-6">
            <img className="h-96" src={image} alt="" />
            <h2 className="text-3xl font-bold mt-4">{contest_name}</h2>
            <h2 className="text-xl font-semibold mt-3">Participants: {reg_count}</h2>
            <p>{description}</p>
            <p className="text-yellow-600 mt-2">Prize: {prizemoney}</p>
            <p className="font-semibold mt-1">Deadline: {deadline}</p>
            <Link to={`/payment/${_id}`}>
                <button className="mt-6 btn btn-outline btn-secondary">Register Now</button>
            </Link>
        </div>
    );
};

export default ContestDetails;