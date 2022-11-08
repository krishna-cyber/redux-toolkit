import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";

const AddForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2>Add New posts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title'>Title:</label>
        <input {...register("title")} />
        <label htmlFor='content'>Content:</label>
        <textarea {...register("content", { required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </form>
    </div>
  );
};

export default AddForm;
