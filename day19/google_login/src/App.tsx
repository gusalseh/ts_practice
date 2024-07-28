import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="maroonever">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
