import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = "https://jsonplaceholder.typicode.com/users";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${API}/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline">&larr; Back</Link>
      <h1 className="text-2xl font-semibold mb-4">{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <div className="mt-2">
        <strong>Address:</strong>
        <div>{user.address?.street}, {user.address?.suite}</div>
        <div>{user.address?.city} - {user.address?.zipcode}</div>
      </div>

      <div className="mt-2">
        <strong>Company:</strong>
        <div>{user.company?.name}</div>
        <div className="text-sm">{user.company?.catchPhrase}</div>
      </div>
    </div>
  );
}

export default User;
