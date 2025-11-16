function UsersList({ users }) {
  return (
    <>
      {users.map((user) => (
        <ul key={user.id} className="flex flex-col">
          <li className="py-2 px-4 text-md font-bold bg-gray-200/50 border border-gray-200 text-indigo-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <a href="#" className="underline">
              {user.name}
            </a>
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
        </ul>
      ))}
    </>
  );
}

export default UsersList;
