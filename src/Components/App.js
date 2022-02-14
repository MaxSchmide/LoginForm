/* eslint-disable array-callback-return */
import { useState } from "react";
import "./App.css";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
function App() {
  const [modal, setModal] = useState(false);
  const [switcher, setSwitcher] = useState(true);
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  let detailsAreAvailable = true;
  const users = [
    { username: "valik", password: "123" },
    { username: "nas", password: "1111" },
    { username: "soso", password: "1q2w" },
  ];
  function addUser(data) {
    for (let i = 0; i < users.length; i++) {
      if (data.username === users[i].username) {
        setError("Username is not available");
        detailsAreAvailable = false;
        break;
      }
    }
    if (detailsAreAvailable) {
      users.push(data);
      console.log("added");
    }
  }
  function errorHandler(err) {
    setError(err);
  }
  function modalHandler() {
    setModal(!modal);
    setSwitcher(true);
  }
  function toggleSwitcher() {
    setSwitcher(!switcher);
  }
  const Login = (details) => {
    users.map((item) => {
      if (
        details.username === item.username &&
        details.password === item.password
      ) {
        setUser({ username: details.username, password: details.password });
        setError("");
      } else {
        setError("Details do not match");
      }
    });
  };
  const Logout = () => {
    setUser({ username: "", password: "" });
    setModal(false);
    setSwitcher(true);
  };
  return (
    <>
      <div className="App">
        {user.username !== "" ? (
          <>
            <div className="navbar"></div>
            <div className="welcome">
              <h2>Welcome {user.username}</h2>
              <button onClick={Logout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="navbar">
              <button onClick={modalHandler} className="btn">
                Log in
              </button>
            </div>

            <div className={`modal ${modal ? "active" : ""}`}>
              <LogIn
                error={error}
                Login={Login}
                state={switcher}
                func={[modalHandler, toggleSwitcher]}
              />
              <SignUp
                error={error}
                add={addUser}
                setError={errorHandler}
                state={switcher}
                func={[modalHandler, toggleSwitcher]}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
