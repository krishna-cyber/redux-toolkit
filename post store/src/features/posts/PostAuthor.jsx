import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return (
    <span className=' text-red-800'>
      by{" "}
      <span className=' text-xl font-medium text-yellow-500'>
        {author ? author.name : "unknown author"}
      </span>
    </span>
  );
};

export default PostAuthor;
