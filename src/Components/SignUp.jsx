/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
export default function SignUp(props) {
  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      details.username !== "" &&
      details.email !== "" &&
      details.password !== ""
    ) {
      props.add(details);
      setDetails({
        username: "",
        password: "",
        email: "",
      });
    } else {
      props.err("Fill empty fields");
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className="sign-up-form ">
        <div className="switcher">
          <li>
            <a onClick={props.switch} href="#">
              Sign In
            </a>
          </li>
          <li>
            <a className="selected" href="#">
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
          placeholder="Enter username"
        />
        <label>E-mail</label>
        <input
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
          type="email"
          placeholder="Enter E-mail"
        />
        <label>Password</label>
        <input
          onChange={(e) => {
            setDetails({ ...details, password: e.target.value });
          }}
          type="password"
          placeholder="Enter password"
          value={details.password}
        />
        <button type="submit"> Submit </button>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        {props.confirm !== "" ? (
          <div className="confirm">{props.confirm}</div>
        ) : (
          ""
        )}

        <button onClick={props.close} className="cancel">
          Cancel
        </button>
      </form>
    </>
  );
}
