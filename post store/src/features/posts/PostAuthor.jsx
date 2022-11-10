import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
const PostAuthor = ({ userID }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userID);
  return (
    <span className=' text-red-800'>
      by &nbsp;
      <span className=' text-xl font-medium text-yellow-500'>
        {author ? author.name : "unknown author"}
      </span>
    </span>
  );
};

export default PostAuthor;
