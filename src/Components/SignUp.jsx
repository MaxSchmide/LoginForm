/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";

/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.username !== "" && data.email !== "" && data.password !== "") {
      props.add(data);
      props.setError("");
      setData({ username: "", email: "", password: "" });
    } else {
      props.setError("Fill empty fields");
    }
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        className={`rg-content ${props.state ? "" : "selected"}`}
      >
        <div className="switcher">
          <li>
            <a onClick={props.func[1]} href="#">
              Log in
            </a>
          </li>
          <li>
            <a className="selected" href="#">
              Register
            </a>
          </li>
        </div>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          type="text"
          placeholder="Enter username"
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          placeholder="Enter email"
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Sign up</button>
        {props.error !== "" ? <div className="error">{props.error}</div> : ""}
        <div className="container">
          <button onClick={props.func[0]} type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
