/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export default function SignIn(props) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    props.login(details);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="sign-in-form ">
        <div className="switcher">
          <li>
            <a className="selected" href="#">
              Sign In
            </a>
          </li>
          <li>
            <a onClick={props.switch} href="#">
              Sign Up
            </a>
          </li>
        </div>
        <label>Username</label>
        <input
          value={details.username}
          onChange={(e) => {
            setDetails({ ...details, username: e.target.value });
          }}
          type="text"
          placeholder="Username"
        />
        <label>Password</label>
        <input
          onChange={(e) => {
            setDetails({ ...details, password: e.target.value });
          }}
          type="password"
          placeholder="Password"
          value={details.password}
        />
        <button type="submit"> Submit </button>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}

        <button onClick={props.close} className="cancel">
          Cancel
        </button>
      </form>
    </>
  );
}
