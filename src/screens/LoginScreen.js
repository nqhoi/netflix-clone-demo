import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="netflix Logo"
        />
        <button
          onClick={() => setSignIn(true)}
          type="button"
          className="btn btn-danger LoginScreen__button"
        >
          Sing In
        </button>

        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      onClick={() => setSignIn(true)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
