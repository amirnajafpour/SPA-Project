import { useState } from "react";
import Loading from "../../Components/Loading";
import { toast } from "react-toastify";

function PostCreate() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to post request, ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Post created Successfully");
        console.log(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-xl mb-5">Create Post:</h1>

      {error && <div className="text-rose-500">{error}</div>}

      <form onSubmit={handleSubmit} className="w-md flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Title:</label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="mt-1 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
          />
          <p className="text-xs text-red-500 mt-1">
            {title ? "" : "Title is required!"}
          </p>
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Body:</label>

          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 rounded border border-gray-300 py-2 px-2 shadow-md focus:border-indigo-600 focus:outline-hidden"
            rows="4"
          ></textarea>
          <p className="text-xs text-red-500 mt-1">
            {body ? "" : "Body is required!"}
          </p>
        </div>

        <button
          disabled={loading || title === "" || body === ""}
          type="submit"
          className="disabled:opacity-75 disabled:cursor-not-allowed flex justify-center items-center gap-2 mb-5 cursor-pointer rounded-sm border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
        >
          Create Post
          {loading && <Loading />}
        </button>
      </form>
    </div>
  );
}

export default PostCreate;
