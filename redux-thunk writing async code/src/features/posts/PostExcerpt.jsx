import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";

const PostExcerpt = ({ post }) => {
  return (
    <>
      {orderedPosts.map((post) => (
        <article className=' border border-blue-800 p-2 rounded-lg '>
          <h3 className=' font-bold text-lg'>{post.title}</h3>
          <p className=' text-slate-800 text-lg'>{post.content}</p>
          <PostAuthor userID={post.user} />
          <TimeAgo timestamp={post.date} />

          <ReactionButtons post={post} />
        </article>
      ))}
    </>
  );
};

export default PostExcerpt;
