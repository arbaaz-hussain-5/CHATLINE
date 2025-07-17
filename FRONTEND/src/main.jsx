import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ChatPage from "./components/ChatPage.jsx";
import Profile from "./components/profile/Profile.jsx";
import Notification from "./components/notification/Notification.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/:id" element={<ChatPage />} />
       <Route path="/notifications/:ids" element={<Notification />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
