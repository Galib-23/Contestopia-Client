

const Card = ({top}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full" src={top.image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{top.contest_name}</h2>
                <p>Registered: {top.reg_count}</p>
            </div>
        </div>
    );
};

export default Card;