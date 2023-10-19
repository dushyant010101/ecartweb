import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="container-f">
          <div className="row">
            <div className="footer-cool">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link className="a">About us</Link>
                </li>
                <li>
                  <Link className="a">our services</Link>
                </li>
                <li>
                  <Link className="a">privecy policy</Link>
                </li>
                <li>
                  <Link className="a">affiliate program</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cool">
              <h4>Get help</h4>
              <ul>
                <li>
                  <Link className="a">FAQ</Link>
                </li>
                <li>
                  <Link className="a">shipping</Link>
                </li>
                <li>
                  <Link className="a">returns</Link>
                </li>
                <li>
                  <Link className="a">order status</Link>
                </li>
                <li>
                  <Link className="a">payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cool">
              <h4>Online Shop</h4>
              <ul>
                <li>
                  <Link className="a">watch</Link>
                </li>
                <li>
                  <Link className="a">bag</Link>
                </li>
                <li>
                  <Link className="a">shoes</Link>
                </li>
                <li>
                  <Link className="a">dress</Link>
                </li>
              </ul>
            </div>
            <div className="footer-cool">
              <h4>Follow us</h4>
              <div className="social-links">
                <Link className="a">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="a">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="a">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link className="a">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
