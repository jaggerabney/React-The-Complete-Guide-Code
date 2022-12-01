import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/auth-slice";

import classes from "./Auth.module.css";

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();

    dispatch(authActions.login());
  }

  return (
    <>
      {!isAuthenticated && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;
