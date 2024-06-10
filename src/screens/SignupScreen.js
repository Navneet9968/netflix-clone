import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form action="">
        <h1>{isSignIn ? <>Sign In</> : <>Sign Up</>}</h1>
        <input ref={emailRef} type="email" placeholder="Email"></input>
        <input ref={passwordRef} type="password" placeholder="Password"></input>
        {isSignIn ? (
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        ) : (
          <button type="submit" onClick={register}>
            Sign Up
          </button>
        )}

        <h4>
          {isSignIn ? (
            <>
              <span className="signupScreen__gray">New to Netflix ? </span>
              <span
                className="signupScreen__link"
                onClick={() => setIsSignIn(false)}
              >
                Sign up now.
              </span>
            </>
          ) : null}
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
