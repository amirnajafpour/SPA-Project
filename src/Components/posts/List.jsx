import { Link } from "react-router";

function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <ul key={post.id} className="flex flex-col">
          <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <Link to={`/posts/${post.userId}`} className="underline">
              {post.title}
            </Link>
          </li>

          <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            {post.body}
          </li>
        </ul>
      ))}
    </>
  );
}

export default PostsList;
