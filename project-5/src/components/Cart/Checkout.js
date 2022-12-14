import React, { useContext } from "react";
import useInput from "../../hooks/use-input";

import CheckoutInput from "./CheckoutInput";
import CartContext from "../../store/cart-context";

import classes from "./Checkout.module.css";

import DATABASE_URL from "../../resources/database-url";

function Checkout(props) {
  const cartContext = useContext(CartContext);

  async function submitHandler(event) {
    event.preventDefault();

    if (formIsValid) {
      const customerDetails = {
        name: nameValue,
        street: streetValue,
        city: cityValue,
        ZIP: ZIPValue,
      };

      props.onSubmit(true);

      await fetch(DATABASE_URL + "orders.json", {
        method: "POST",
        body: JSON.stringify({
          customer: customerDetails,
          order: cartContext.items,
        }),
      });

      props.onSubmit(false);
      props.onComplete(true);

      cartContext.clearCart();

      nameReset();
      streetReset();
      cityReset();
      ZIPReset();
    }
  }

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.length > 0);
  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInput((value) => value.length > 0);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.length > 0);
  const {
    value: ZIPValue,
    isValid: ZIPIsValid,
    hasError: ZIPHasError,
    inputChangeHandler: ZIPChangeHandler,
    inputBlurHandler: ZIPBlurHandler,
    reset: ZIPReset,
  } = useInput((value) => value.length === 5 && /^\d+$/.test(value));

  let formIsValid = nameIsValid && streetIsValid && cityIsValid && ZIPIsValid;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <CheckoutInput
        className={`${classes.control} ${nameHasError && classes.invalid}`}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={nameValue}
        error={nameHasError}
        errorMessage="Name must not be empty."
        label="Your Name"
        type="text"
        id="name"
      />
      <CheckoutInput
        className={`${classes.control} ${streetHasError && classes.invalid}`}
        onChange={streetChangeHandler}
        onBlur={streetBlurHandler}
        value={streetValue}
        error={streetHasError}
        errorMessage="Street address must not be empty."
        label="Street Address"
        type="text"
        id="street"
      />
      <CheckoutInput
        className={`${classes.control} ${cityHasError && classes.invalid}`}
        onChange={cityChangeHandler}
        onBlur={cityBlurHandler}
        value={cityValue}
        error={cityHasError}
        errorMessage="City must not be empty."
        label="City"
        type="text"
        id="city"
      />
      <CheckoutInput
        className={`${classes.control} ${ZIPHasError && classes.invalid}`}
        onChange={ZIPChangeHandler}
        onBlur={ZIPBlurHandler}
        value={ZIPValue}
        error={ZIPHasError}
        errorMessage="ZIP code must be a five-digit number."
        label="ZIP Code"
        type="text"
        id="ZIP"
      />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
