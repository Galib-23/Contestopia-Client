import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddContest = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const onSubmit = async (data) => {
        console.log(data);
        //send the dtata to the server
        const contest = {
            contest_name: data.name,
            image: data.photo,
            description: data.description,
            prizemoney: data.prize,
            reg_fee: data.fee,
            instructions: data.instructions,
            tag: data.tag,
            deadline: data.deadline,
            created_by: user?.email,
            reg_count: 0,
            status: 'pending'
        }
        const contestRes = await axiosSecure.post('/contest',contest);
        if (contestRes.data.insertedId) {
            Swal.fire("Item added successfully!");
            reset();
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <label className="form-control w-full mt-6">
                        <div className="label">
                            <span className="label-text">Contest Name</span>
                        </div>
                        <input {...register('name')} type="text" placeholder="Contest name" className="input input-bordered w-full" required />
                    </label>


                    <div className="flex gap-6 mt-6">
                        <label className="form-control w-full mt-6">
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input {...register('photo')} type="text" placeholder="Image Url" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full mt-6">
                            <div className="label">
                                <span className="label-text">Prize</span>
                            </div>
                            <input {...register('prize')} type="text" placeholder="Prize" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <label className="form-control w-full mt-6">
                            <div className="label">
                                <span className="label-text">Deadline</span>
                            </div>
                            <input {...register('deadline')} type="calender" placeholder="Deadline" className="input input-bordered w-full" required />
                        </label>

                    <div className="flex gap-6 mt-6">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Tag*</span>
                            </div>
                            <select defaultValue="default" {...register("tag")} className="select select-bordered w-full" required>
                                <option disabled value="default">Select a tag</option>
                                <option value="business">business</option>
                                <option value="article">article</option>
                                <option value="gaming">gaming</option>
                                <option value="medical">medical</option>
                            </select>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Fee*</span>
                            </div>
                            <input {...register('fee')} type="number" placeholder="Fee" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description Here" required></textarea>
                    </label>
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Instructions</span>
                        </div>
                        <textarea {...register('instructions')} className="textarea textarea-bordered h-24" placeholder="Instructions About The Contest Here" required></textarea>
                    </label>
                    <button className="btn mt-6 bg-green-500">
                        Add Contest
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddContest;