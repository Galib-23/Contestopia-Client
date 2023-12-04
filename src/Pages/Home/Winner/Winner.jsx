

const Winner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkOkJcz8xNsCQwSE62g5SMezVFOEJfI7Dozixgc87axWKHSfJHKHkHb85kA_R63JjhCI&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Winner Of The Week!</h1>
                    <p className="py-6">Steve Rogers</p>
                </div>
            </div>
        </div>
    );
};

export default Winner;