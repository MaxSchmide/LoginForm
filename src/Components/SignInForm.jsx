/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./Style.css";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

export default function SignInForm(props) {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [switcher, setSwitcher] = useState(true);
  const [confrim, setconfrim] = useState("");
  const [usersDataBase, setUsersDataBase] = useState([
    { username: "schmide", email: "yamaks97@ukr.net", password: "123" },
    { username: "valik", password: "111", email: "soso@ukr.net" },
  ]);
  const usersData = require("./file.json");
  const usersDataFile = usersData.users;

  const isModalShow = () => {
    setModal(!modal);
    setSwitcher(true);
  };
  const signSwitcher = () => {
    setSwitcher(!switcher);
    setError("");
  };
  const logIn = (details) => {
    usersDataBase.map((item) => {
      if (
        details.username === item.username &&
        details.password === item.password
      ) {
        props.auth({
          username: details.username,
          password: details.password,
        });
        setError("");
      } else {
        setError("Details do not match");
      }
    });
  };
  const errorHandler = (err) => setError(err);
  const addUserToBase = (data) => {
    let usernameIsAvailable;
    let emailIsAvailable;
    let errorMessage = "";
    let confirmMessage = "";
    if (!/^[a-zA-Z0-9@]+.+$/.test(data.email)) {
      emailIsAvailable = true;
      setError("Not correct E-mail");
    } else if (!/^[a-zA-Z0-9]+$/.test(data.username)) {
      if (!/^[а-яА-Я]+$/.test(data.username)) {
        usernameIsAvailable = true;
        errorMessage = "Username can't contain symbols";
      } else {
        usernameIsAvailable = true;
        errorMessage = "Write username in English";
      }
    } else {
      emailIsAvailable = usersDataBase.some(
        ({ email }) => email === data.email
      );
      usernameIsAvailable = usersDataBase.some(
        ({ username }) => username === data.username
      );
    }

    if (!usernameIsAvailable && !emailIsAvailable) {
      setUsersDataBase([...usersDataBase, data]);
      errorMessage = "";
      confirmMessage = "Added";
    } else if (
      (usernameIsAvailable = usersDataBase.some(
        ({ username }) => username === data.username
      ))
    ) {
      errorMessage = "Username is not available";
    } else if (
      (emailIsAvailable = usersDataBase.some(
        ({ email }) => email === data.email
      ))
    ) {
      errorMessage = "E-mail alreay used";
    }
    setError(errorMessage);
    setconfrim(confirmMessage);
  };

  return (
    <>
      <nav>
        <button onClick={isModalShow} className="btn">
          Sign In
        </button>
      </nav>
      {modal && (
        <div className="modal-window active">
          {switcher ? (
            <SignIn
              switch={signSwitcher}
              error={error}
              login={logIn}
              close={isModalShow}
            />
          ) : (
            <SignUp
              err={errorHandler}
              confirm={confrim}
              add={addUserToBase}
              close={isModalShow}
              error={error}
              switch={signSwitcher}
            />
          )}
        </div>
      )}
    </>
  );
}
