import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BestContentCreator from "../BestContentCreator.jsx/BestContentCreator";
import PopularContest from "../PopularContest/PopularContest";
import Winner from "../Winner/Winner";

const HomePage = () => {
    return (
        <div className="lg:mx-16">
            <Banner></Banner>
            <PopularContest></PopularContest>
            <BestContentCreator></BestContentCreator>
            <Winner></Winner>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;