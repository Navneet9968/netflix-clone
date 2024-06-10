import React, { useState } from "react";
import "./WelcomeScreen.css";
import SignupScreen from "./SignupScreen";

function WelcomeScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="welcomeScreen">
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
        className="welcomeScreen__logo"
      />
      <button onClick={() => setSignIn(true)} className="welcomeScreen__button">
        Sign In
      </button>

      <div className="welcomeScreen__gradient" />

      <div className="welcomeScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="welcomeScreen__input">
              <button
                onClick={() => setSignIn(true)}
                className="welcomeScreen__getStarted"
              >
                Get Started
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeScreen;
