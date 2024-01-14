
import winner from '../../../assets/winner.png';
const Winner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col gap-12 lg:flex-row">
                <img src={winner} className="w-96 md:w-[750px] md:h-[450px] rounded-2xl shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-cyan-400">Winner Of The Week!</h1>
                    <p className="py-6 text-2xl font-semibold">Md. Abdul Latif</p>
                    <p>Md. Abdul Latif recently participated in the annual business competetion 2023. He has successfully scored 500 a record score in the history of business competetion. He outpassed his competetors with a huge gap left behind.</p>
                </div>
            </div>
        </div>
    );
};

export default Winner;