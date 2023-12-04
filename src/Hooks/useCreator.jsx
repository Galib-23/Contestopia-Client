import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCreator = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isCreator, isPending: isCreatorLoading} = useQuery({
        queryKey: [user?.email, 'isCreator'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/creator/${user.email}`);
            return res.data?.creator;
        }
    })
    return [isCreator, isCreatorLoading];
};

export default useCreator;