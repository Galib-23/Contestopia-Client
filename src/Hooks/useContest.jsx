import { useEffect, useState } from "react";

const useContest = () => {
    const [contest, setContest] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://contestopia-server.vercel.app/contest')
        .then(res => res.json())
        .then(data => {
            setContest(data);
            setLoading(false);
        });
    }, [])
    return [contest, loading];
}
export default useContest;