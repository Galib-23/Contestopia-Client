
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useContest from '../../Hooks/useContest';
import ContestCard from '../../Components/ContestCard';
import { useParams } from 'react-router-dom';

const AllContest = () => {

    const categories = ['business', 'article', 'gaming', 'medical'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [contest] = useContest();


    const business = contest.filter(con => con.tag === 'business');
    const article = contest.filter(con => con.tag === 'article');
    const gaming = contest.filter(con => con.tag === 'gaming');
    const medical = contest.filter(con => con.tag === 'medical');
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Business Contests</Tab>
                    <Tab>Article Writing</Tab>
                    <Tab>Gaming Contests</Tab>
                    <Tab>Medical Contests</Tab>
                </TabList>
                <TabPanel className={"mx-1 md:mx-16"}>
                    <div className='grid grid-cols-1 md:grid-cols-3 p-10 gap-10'>
                        {
                            business?.map(con => <ContestCard key={con._id} con={con}></ContestCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className={"mx-1 md:mx-16"}>
                    <div className='grid grid-cols-1 md:grid-cols-3 p-10 gap-10'>
                        {
                            article?.map(con => <ContestCard key={con._id} con={con}></ContestCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className={"mx-1 md:mx-16"}>
                    <div className='grid grid-cols-1 md:grid-cols-3 p-10 gap-10'>
                        {
                            gaming?.map(con => <ContestCard key={con._id} con={con}></ContestCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel className={"mx-1 md:mx-16"}>
                    <div className='grid grid-cols-1 md:grid-cols-3 p-10 gap-10'>
                        {
                            medical?.map(con => <ContestCard key={con._id} con={con}></ContestCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllContest;