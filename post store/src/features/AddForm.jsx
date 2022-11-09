import React from "react";
import { useForm } from "react-hook-form";
import { postAdded } from "./posts/postSlice";
import { useDispatch } from "react-redux";
import { selectAllUsers } from "./users/userSlice";
import { useSelector } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const savepost = (data) => {
    dispatch(postAdded(data.title, data.content, data.user));
    reset();
  };

  const users = useSelector(selectAllUsers);
  return (
    <div>
      <h2 className=' font-bold text-blue-700'>Add New posts</h2>
      <form onSubmit={handleSubmit(savepost)} className='flex flex-col '>
        <label htmlFor='title' className=' text-bold text-2xl'>
          Title:
        </label>
        <input
          className=' outline-none p-2 rounded-lg'
          {...register("title", { required: true })}
        />
        <label htmlFor='content' className=' text-bold text-2xl'>
          Content:
        </label>
        <textarea
          className=' rounded-lg'
          {...register("content", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <label htmlFor='user' className=' text-bold text-2xl'>
          Author:
        </label>
        <select
          className=' rounded-lg'
          {...register("user", { required: true })}>
          Select User
          <option value='0'>Krishna</option>
          <option value='1'>sankar</option>
          <option value='2'>Mahadev</option>
        </select>
        <button
          className=' mt-4 bg-blue-700 rounded-lg text-white font-bold text-xl p-2 disabled:bg-blue-400'
          type='submit'
          disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
