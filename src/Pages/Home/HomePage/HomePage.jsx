import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BestContentCreator from "../BestContentCreator.jsx/BestContentCreator";
import PopularContest from "../PopularContest/PopularContest";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularContest></PopularContest>
            <BestContentCreator></BestContentCreator>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;