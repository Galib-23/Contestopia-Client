import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })
    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
            })
    }
    const handleMakeCreator = (user) => {
        axiosSecure.patch(`/users/creator/${user._id}`)
            .then(res => {
                console.log(res.data);
                refetch();
            })
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl font-bold">All Users</h2>
                <h2 className="text-3xl font-bold">Total Users: {users?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user =>
                            <tr key={user._id}>
                                <td>
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role ? 
                                        <p>{user.role}</p>
                                        : 
                                        <div className="dropdown dropdown-left">
                                        <div tabIndex={0} role="button" className="btn m-1">
                                            <FaUserSecret className="text-xl"></FaUserSecret>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 space-y-2">
                                            <li>
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm">Make Admin</button>
                                            </li>
                                            <li>
                                                <button onClick={() => handleMakeCreator(user)} className="btn btn-sm">Make Creator</button>
                                            </li>
                                        </ul>
                                    </div>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn text-red-500">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;