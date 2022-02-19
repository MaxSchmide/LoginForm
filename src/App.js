import SignInFrom from "./Components/SignInForm";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  const currentuser = (userData) => {
    setUser(userData);
  };
  return (
    <>
      {user.username.length ? (
        <Welcome auth={currentuser} user={user} />
      ) : (
        <SignInFrom auth={currentuser} />
      )}
    </>
  );
}

export default App;
