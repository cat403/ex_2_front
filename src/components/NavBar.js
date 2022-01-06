import React from "react";
import "./componentCSS/NavBar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../redux/actions";
//  <Link to="/">Home</Link>
// <Link to="/try">Try</Link
function NavBar() {
  let isLoggedIn = localStorage.getItem("id");
  //
  //
  //
  //
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserInfo(localStorage.getItem("id")));
  }, []);

  let user = useSelector((state) => state.user);
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
            <button className="signout-btn">Sign out</button>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <button className="signin-btn">Sign in</button>
            <button className="signup-btn">Sign up</button>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
