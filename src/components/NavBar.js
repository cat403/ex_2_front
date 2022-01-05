import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  let isLoggedIn = localStorage.getItem("id");
  let user = useSelector((state) => state.user);
  return (
    <nav className="navbar">
      {isLoggedIn ? (
        <ul className="navbar-nav">
          <li>HELLLLLO {user.userName}</li>
        </ul>
      ) : (
        <ul className="navbar-nav">
          <li>sign in</li> <li>log in</li>{" "}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
