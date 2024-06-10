import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
        //the logout function is setting the user value back to null
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? (
        <WelcomeScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
