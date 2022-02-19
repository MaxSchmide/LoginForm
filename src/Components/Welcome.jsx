import React from "react";

export default function Welcome(props) {
  const signOut = () => {
    props.auth({ username: "", password: "" });
  };
  return (
    <div>
      <h1>Welcome {props.user.username}!</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
