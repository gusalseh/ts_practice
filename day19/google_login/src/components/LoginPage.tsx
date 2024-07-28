import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwt_decode } from "jwt-decode-es";

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onSuccess = (credentialResponse: any) => {
    const decoded = jwt_decode(credentialResponse.credential) as GoogleUser;
    navigate("/profile", { state: { user: decoded } });
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div>
      <h1>Google Login</h1>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default LoginPage;
