import { Link } from "react-router-dom";

const ContestCard = ({ con }) => {
    const { _id, contest_name, image, reg_count, description } = con;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{contest_name}</h2>
                <p>{description}</p>
                <p><span className="font-semibold">Registered:</span> {reg_count} people</p>
                <Link to={`/contestDetails/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ContestCard;