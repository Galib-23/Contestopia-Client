import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ContestCard = ({ con }) => {
    const { _id, contest_name, image, reg_count, description } = con;
    return (
        <div className="card bg-white shadow-xl">
            <figure className="p-5"><img className="w-full h-60 rounded-lg" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-cyan-600">{contest_name}</h2>
                <p>{description}</p>
                <p><span className="font-semibold">Registered:</span> {reg_count} people</p>
                <Link to={`/contestDetails/${_id}`}>
                    <div className="card-actions justify-start mt-3">
                        <button className="btn btn-outline btn-sm text-cyan-400">Details <HiOutlineExclamationCircle /></button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ContestCard;