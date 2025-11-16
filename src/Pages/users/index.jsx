import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import UsersList from "../../Components/users/List";

function IndexUsers() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Couldn't Fetch users Data ...");
        const data = await response.json();
        setUsers(data);
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
      <h1 className="font-bold text-xl mb-5">Users:</h1>
      {error && <div className="text-rose-500">{error}</div>}

      {loading && <Loading />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {users && <UsersList users={users} />}
      </div>
    </div>
  );
}

export default IndexUsers;
