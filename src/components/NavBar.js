import React from "react";
import "./componentCSS/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../redux/actions";
import Popups from "./Popups";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { logOut } from "../redux/actions";
//  <Link to="/">Home</Link>
// <Link to="/try">Try</Link
function NavBar() {
  let isLoggedIn = localStorage.getItem("id");
  const [signInPopup, setSignInPopup] = React.useState(false);
  const [signUpPopup, setSignUpPopup] = React.useState(false);
  const handlePopup = (setFunction, variable) => {
    setFunction(!variable);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      dispatch(getUserInfo(localStorage.getItem("id")));
    }
  }, []);

  let user = useSelector((state) => state.user);
  const handleSignOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar-content-container">
        <div className="navbar-logo">
          <Link to="/">Exercise App</Link>
        </div>
        {isLoggedIn && user ? (
          <ul className="navbar-nav">
            <li>
              <Link to="/try">Fitness</Link>
            </li>
            <li>
              <Link to="/try">Nutrition</Link>
            </li>
            <li>
              <Link to="/">{user?.userName}</Link>
            </li>
            <button className="signout-btn" onClick={handleSignOut}>
              Sign out
            </button>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <button
              className="signin-btn"
              onClick={() => {
                handlePopup(setSignInPopup, signInPopup);
              }}
            >
              Sign in
            </button>
            <button
              className="signup-btn"
              onClick={() => {
                handlePopup(setSignUpPopup, signUpPopup);
              }}
            >
              Sign up
            </button>
          </ul>
        )}
      </div>
      {signInPopup && (
        <Popups
          content={
            <SignIn
              handleClose={() => {
                handlePopup(setSignInPopup, signInPopup);
              }}
            />
          }
          handleClose={() => {
            handlePopup(setSignInPopup, signInPopup);
          }}
        />
      )}
      {signUpPopup && (
        <Popups
          content={
            <SignUp
              handleClose={() => {
                handlePopup(setSignUpPopup, signUpPopup);
              }}
            />
          }
          handleClose={() => {
            handlePopup(setSignUpPopup, signUpPopup);
          }}
        />
      )}
      {}
    </nav>
  );
}

export default NavBar;
