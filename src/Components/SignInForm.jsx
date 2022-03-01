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

  const usersData = require("./file.json");
  const usersDataBase = usersData.users;

  const handlerModalWindow = () => {
    setModal(!modal);
    setSwitcher(true);
  };
  const toggleSignForm = () => {
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
      errorMessage = "Not correct E-mail";
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
      usersDataBase.push(data);
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
        <button onClick={handlerModalWindow} className="btn">
          Sign In
        </button>
      </nav>
      {modal && (
        <div className="modal-window active">
          {switcher ? (
            <SignIn
              switch={toggleSignForm}
              error={error}
              login={logIn}
              close={handlerModalWindow}
            />
          ) : (
            <SignUp
              err={errorHandler}
              confirm={confrim}
              add={addUserToBase}
              close={handlerModalWindow}
              error={error}
              switch={toggleSignForm}
            />
          )}
        </div>
      )}
    </>
  );
}
