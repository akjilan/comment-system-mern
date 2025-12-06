import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded min-h-[80vh] mt-7">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p>
        <strong>User ID:</strong> {user?._id}
      </p>
    </div>
  );
}
