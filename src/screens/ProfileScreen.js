import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2> {user.email} </h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <h5>Renaval date:</h5>
              <ul className="profileScreen__plans-list">
                <li className="profileScreen__plans-item">
                  <span>
                    Netflix Standard
                    <br />
                    <span className="profileScreen__plans-sub">1080p</span>
                  </span>
                  <button type="button" class="btn btn-danger">
                    Subcribe
                  </button>
                </li>
                <li className="profileScreen__plans-item">
                  <span>
                    Netflix basic
                    <br />
                    <span className="profileScreen__plans-sub">480p</span>
                    
                  </span>
                  <button type="button" class="btn btn-danger">
                    Subcribe
                  </button>
                </li>
                <li className="profileScreen__plans-item">
                  <span>
                    Netflix Premium
                    <br />
                    <span className="profileScreen__plans-sub">4k_HDR</span>
                  </span>
                  <button type="button" class="btn btn-secondary">
                    Current Package
                  </button>
                </li>
              </ul>
              <button
                onClick={() => auth.signOut()}
                type="button"
                className="btn btn-danger LoginScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
