import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValueIsValid,
    hasError: firstNameIsInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameValueIsValid,
    hasError: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const formIsValid =
    firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid;

  function submitHandler(event) {
    event.preventDefault();

    if (formIsValid) {
      firstNameReset();
      lastNameReset();
      emailReset();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameIsInvalid && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
            type="text"
            id="name"
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name must not be blank.</p>
          )}
        </div>
        <div className={`form-control ${lastNameIsInvalid && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
            type="text"
            id="name"
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name must not be blank.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailIsInvalid && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          type="text"
          id="name"
        />
        {emailIsInvalid && (
          <p className="error-text">
            Email must not be blank and must contain an @.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
