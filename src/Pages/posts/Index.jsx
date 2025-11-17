import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import PostsList from "../../Components/posts/List";
import { Link } from "react-router";

function PostsIndex() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          " https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Couldn't Fetch posts Data ...");
        const data = await response.json();
        setPosts(data);
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
      <h1 className="font-bold text-xl mb-5">Posts:</h1>
      <Link
        to="/posts/create"
        className="mb-5 inline-block cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
      >
        Create Post
      </Link>

      {error && <div className="text-rose-500">{error}</div>}
      {loading && <Loading />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts && <PostsList posts={posts} />}
      </div>
    </div>
  );
}

export default PostsIndex;
