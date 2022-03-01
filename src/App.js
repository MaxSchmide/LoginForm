import SignInFrom from "./Components/SignInForm";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const handleCurrentUser = (userData) => {
    setCurrentUser(userData);
  };
  return (
    <>
      {currentUser.username.length ? (
        <Welcome auth={handleCurrentUser} user={currentUser} />
      ) : (
        <SignInFrom auth={handleCurrentUser} />
      )}
    </>
  );
}

export default App;
