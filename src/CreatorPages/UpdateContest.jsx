import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateContest = () => {

    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();

    const { _id, contest_name, image, description, prizemoney, reg_fee, instructions, tag, deadline } = useLoaderData();

    const onSubmit = async (data) => {
        const contestItem = {
            contest_name: data.name,
            image: data.photo,
            description: data.description,
            prizemoney: data.prize,
            reg_fee: data.fee,
            instructions: data.instructions,
            tag: data.tag,
            deadline: data.deadline
        }
        const contestRes = await axiosSecure.patch(`/contest/${_id}`, contestItem)
        console.log(contestRes.data);
        if (contestRes.data.modifiedCount > 0) {
            Swal.fire("Item Updated successfully!");
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
                        <input {...register('name')} defaultValue={contest_name} type="text" placeholder="Contest name" className="input input-bordered w-full" required />
                    </label>


                    <div className="flex gap-6 mt-6">
                        <label className="form-control w-full mt-6">
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input {...register('photo')} defaultValue={image} type="text" placeholder="Image Url" className="input input-bordered w-full" required />
                        </label>
                        <label className="form-control w-full mt-6">
                            <div className="label">
                                <span className="label-text">Prize</span>
                            </div>
                            <input {...register('prize')} defaultValue={prizemoney} type="text" placeholder="Prize" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <label className="form-control w-full mt-6">
                        <div className="label">
                            <span className="label-text">Deadline</span>
                        </div>
                        <input {...register('deadline')} defaultValue={deadline} type="calender" placeholder="Deadline" className="input input-bordered w-full" required />
                    </label>

                    <div className="flex gap-6 mt-6">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Tag*</span>
                            </div>
                            <select defaultValue={tag} {...register("tag")} className="select select-bordered w-full" required>
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
                            <input {...register('fee')} defaultValue={reg_fee} type="number" placeholder="Fee" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register('description')} defaultValue={description} className="textarea textarea-bordered h-24" placeholder="Description Here" required></textarea>
                    </label>
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Instructions</span>
                        </div>
                        <textarea {...register('instructions')} defaultValue={instructions} className="textarea textarea-bordered h-24" placeholder="Instructions About The Contest Here" required></textarea>
                    </label>
                    <button className="btn mt-6 bg-green-500">
                        Update Contest
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateContest;