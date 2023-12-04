import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRegistered = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: registered =[]} = useQuery({
        queryKey: ['registered'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registered`)
            return res.data;
        }
    });
    return [registered, refetch];
};

export default useRegistered;