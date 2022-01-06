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
      {isLoggedIn && user ? (
        <ul className="navbar-nav">
          <li>
            <Link to="/">{user?.userName}</Link>
          </li>
          <li>
            <Link to="/try">Try</Link>
          </li>
          <li>HELLLLLO {user?.userName}</li>
          <li>HELLLLLO {user?.userName}</li>
          <li>HELLLLLO {user?.userName}</li>
        </ul>
      ) : (
        <ul className="navbar-nav">
          <li>sign in</li> <li>log in</li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
