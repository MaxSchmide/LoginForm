/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";

/* eslint-disable import/no-anonymous-default-export */

const LogIn = (props) => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    props.Login(details);
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className={`lg-content ${props.state ? "selected" : ""}`}
      >
        <div className="switcher">
          <li>
            <a className="selected" href="#">
              Log in
            </a>
          </li>
          <li>
            <a onClick={props.func[1]} href="#">
              Register
            </a>
          </li>
        </div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <button type="submit">Login</button>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        <span>
          <input type="checkbox" name="remember" />
          Remember me
        </span>
        <div className="container">
          <button onClick={props.func[0]} type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#1">password?</a>
          </span>
        </div>
      </form>
    </>
  );
};
export default LogIn;
