import React from "react";

function NavBar() {
  let isLoggedIn = localStorage.getItem("id");
  return (
    <nav className="navbar">
      {isLoggedIn ? (
        <ul className="navbar-nav">
          <li>HELLLLLO</li>
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
