import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/Authcontext";
import SignUp from "./pages/Signup";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex item-center justify-center ">
        {/* <Login />
        {/* <Signup /> */}
        {/* <Home /> */}

        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          ></Route>
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          ></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
