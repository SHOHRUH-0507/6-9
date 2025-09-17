import React from "react";
import Header from "../components/Header";
import useGetData from "../hooks/useGetData";
import { Link } from "react-router-dom";

function Home() {
  const { data, loading, error, refresh } = useGetData();

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>

        {loading && <p>Loading users...</p>}
        {error && (
          <div>
            <p className="text-red-600">Error: {error}</p>
            <button onClick={refresh} className="btn mt-2">Retry</button>
          </div>
        )}

        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id} className="p-2 border rounded mb-2">
                <Link
                  to={`/user/${user.id}`}
                  className="block hover:bg-gray-100 hover:text-black p-2 rounded"
                >
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.username}</div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
