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
  const [confirm, setConfirm] = useState("");
  const [users, setUsers] = useState([
    { username: "valik", password: "123" },
    { username: "nas", password: "1111" },
    { username: "soso", password: "1q2w" },
  ]);

  const addUser = (data) => {
    let detailsAreAvailable = users.some(
      ({ username }) => username === data.username
    );
    if (!detailsAreAvailable) {
      setUsers([...users, data]);
      setConfirm("added");
      console.log("added");
    } else {
      errorHandler("Username is not available");
    }
  };
  const errorHandler = (err) => setError(err);
  const isModalShow = () => {
    setModal(!modal);
    setSwitcher(true);
  };
  const toggleSwitcher = () => {
    setSwitcher(!switcher);
    setError("");
  };

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
              <button onClick={isModalShow} className="btn">
                Log in
              </button>
            </div>

            {modal && (
              <div className="modal active">
                <LogIn
                  error={error}
                  Login={Login}
                  state={switcher}
                  func={[isModalShow, toggleSwitcher]}
                />
                <SignUp
                  confirm={confirm}
                  error={error}
                  add={addUser}
                  setError={errorHandler}
                  state={switcher}
                  func={[isModalShow, toggleSwitcher]}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
