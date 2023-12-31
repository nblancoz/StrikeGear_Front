import React, { useContext } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    await logout();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <nav className="Header">
      <div>
        {token ? (
          <>
            <span onClick={logoutUser}>
              <Link className="link" to="/">
                Logout
              </Link>
            </span>
            <span>
              <Link className="link" to="/profile">
                Profile
              </Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link className="link" to="/login">
                Login
              </Link>
            </span>
            <span>
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
