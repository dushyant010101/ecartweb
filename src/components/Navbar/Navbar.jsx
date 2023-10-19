import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo/logo.svg";
import "./Navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <p className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              class="d-inline-block align-text-top"
            />
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"ecartweb/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/shop"}
                >
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/cart"}
                >
                  <AddShoppingCartIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
