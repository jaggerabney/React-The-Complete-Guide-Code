import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import API_KEY from "../../resources/api-key";

import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();

  const authContext = useContext(AuthContext);

  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;

    // validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" +
        API_KEY,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      history.replace("/");
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordRef}
          minLength="7"
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
