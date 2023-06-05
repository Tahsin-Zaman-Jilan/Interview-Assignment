import React, { useState } from "react";
import "./index.css";
import UserForm from './UserForm';
function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
      
    },
    {
      username: "user2",
      password: "pass2",
     
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        setUserInfo(null);
      } else {
        setIsSubmitted(true);
        setUserInfo(userData);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      setUserInfo(null);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" id="fname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" id="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  // JSX code for user info section
  const renderUserInfo = userInfo && (

    <div>
    
    
     
      <h2>Username: Welcome, {userInfo.username}</h2>


      
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Signed In</div>
        {isSubmitted ? <div>{renderUserInfo}
        <UserForm />

        </div> : renderForm}
        guest use <br></br>
        username: user1
        <br></br>
      password: pass1
      </div>
    </div>
  );
}

export default App;
