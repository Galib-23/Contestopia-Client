import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useRegistered = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {refetch, data: registered =[]} = useQuery({
        queryKey: ['registered', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registered?email=${user?.email}`)
            return res.data;
        }
    });
    return [registered, refetch];
};

export default useRegistered;