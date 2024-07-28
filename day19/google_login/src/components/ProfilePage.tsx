import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const user = location.state?.user as GoogleUser;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt="Profile" />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
