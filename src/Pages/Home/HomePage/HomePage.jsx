import Footer from "../../Shared/Footer/Footer";
import Accordian from "../Accordian/Accordian";
import Ad from "../Ad/Ad";
import Banner from "../Banner/Banner";
import BestContentCreator from "../BestContentCreator.jsx/BestContentCreator";
import PopularContest from "../PopularContest/PopularContest";
import Statistics from "../Statistics/Statistics";
import Winner from "../Winner/Winner";

const HomePage = () => {
    return (
        <div className="lg:mx-16">
            <Banner></Banner>
            <PopularContest></PopularContest>
            <BestContentCreator></BestContentCreator>
            <Ad></Ad>
            <Winner></Winner>
            <Statistics></Statistics>
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;