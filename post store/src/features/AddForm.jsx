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
      <h2>Add New posts</h2>
      <form onSubmit={handleSubmit(savepost)}>
        <label htmlFor='title'>Title:</label>
        <input {...register("title")} />
        <label htmlFor='content'>Content:</label>
        <textarea {...register("content", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
        <label htmlFor='user'>Author:</label>
        <select {...register("user", { required: true })}>
          Select User
          <option value='0'>Krishna</option>
          <option value='1'>sankar</option>
          <option value='2'>Mahadev</option>
        </select>
        <button type='submit' disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
