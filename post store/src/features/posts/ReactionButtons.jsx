import { reactionsAdded } from "./postSlice";
import { useDispatch } from "react-redux";

const reactionemojis = {
  thumbsUp: "👍",
  hooray: "😅",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👁️",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {Object.entries(reactionemojis).map(([name, emoji]) => {
          return (
            <button
              key={name}
              type='button'
              className='m-1 p-1 bg-blue-800 text-white rounded'
              onClick={() =>
                dispatch(reactionsAdded({ id: post.id, reaction: name }))
              }>
              {emoji} {post.reactions[name]}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ReactionButtons;
