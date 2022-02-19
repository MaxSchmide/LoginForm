import React from "react";
import img from "../Images/1.jpg";
export default function Welcome(props) {
  const signOut = () => {
    props.auth({ username: "", password: "" });
  };
  return (
    <div>
      <h1>Welcome {props.user.username}!</h1>
      <button className="btn" onClick={signOut}>
        Sign out
      </button>
      <img src={img} alt="1" />
    </div>
  );
}
