import React from "react";
import { useForm } from "react-hook-form";
import { postAdded } from "./posts/postSlice";
import { useDispatch } from "react-redux";

const AddForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const savepost = (data) => {
    dispatch(postAdded(data.title, data.content));
    reset();
  };
  return (
    <div>
      <h2>Add New posts</h2>
      <form onSubmit={handleSubmit(savepost)}>
        <label htmlFor='title'>Title:</label>
        <input {...register("title")} />
        <label htmlFor='content'>Content:</label>
        <textarea {...register("content", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
        <option value=''>Select a category</option>
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddForm;
