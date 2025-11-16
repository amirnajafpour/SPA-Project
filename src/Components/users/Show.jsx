import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useParams } from "react-router";

function UserShow() {
  const { usersId } = useParams();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${usersId}`
        );
        if (!response.ok) throw new Error("Couldn't Fetch users Data ...");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-15 px-4 sm:px-6 lg:px-8">
        {error && <div className="text-rose-500">{error}</div>}
        {loading && <Loading />}

        {user && (
          <ul className="w-100 flex flex-col">
            <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              {user.name}
            </li>

            <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              Username: <span>{user.username}</span>
            </li>

            <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              Email: <span>{user.email}</span>
            </li>

            <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              Phone: <span>{user.phone}</span>
            </li>

            <li className="py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
              Website: <span>{user.website}</span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default UserShow;
