import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className="body_css">
      <div className="wrapper">
        <form action="">
          <h2>Login</h2>
          <div className="input-boxr">
            <input type="text" placeholder="Username" required />
            <i class="fa-solid fa-user"></i>
          </div>
          <div className="input-boxr">
            <input type="password" placeholder="password" required />
            <i class="fa-solid fa-lock"></i>
          </div>
          <div class="mb-3 form-check remember-forget">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <span style={{margin:"0 30px 0 10px"}}>Remembar me</span>
            <Link className="a">Forgot Password?</Link>
          </div>
          <button type="Submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <Link className="aa">Register</Link>
            </p>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Login;
