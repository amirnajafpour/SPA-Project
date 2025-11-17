import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useParams } from "react-router";

function PostShow() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          ` https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) throw new Error("Couldn't Fetch posts Data ...");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
      {error && <div className="text-rose-500">{error}</div>}
      {loading && <Loading />}

      {post && (
        <div className="w-lg">
          <ul className="flex flex-col">
            <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              <a href="#" className="underline">
                {post.title}
              </a>
            </li>

            <li className="py-6 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              {post.body}
            </li>

            <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              <button className="cursor-pointer rounded-sm border border-red-600 bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden">
                Delete
              </button>

              <button className="ml-4 cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
                Edit
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostShow;
