import classes from "./Checkout.module.css";
import CheckoutInput from "./CheckoutInput";

function Checkout(props) {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <CheckoutInput
        validationFunction={(value) => value.length > 0}
        errorMessage="Your name must not be empty."
        label="Your Name"
        type="text"
        id="name"
      />
      <CheckoutInput
        validationFunction={(value) => value.length > 0}
        errorMessage="Street address must not be empty."
        label="Street Address"
        type="text"
        id="street"
      />
      <CheckoutInput
        validationFunction={(value) => value.length > 0}
        errorMessage="City must not be empty."
        label="City"
        type="text"
        id="city"
      />
      <CheckoutInput
        validationFunction={(value) =>
          value.length === 5 && /^\d+$/.test(value)
        }
        errorMessage="ZIP code must be a five-character number."
        label="ZIP Code"
        type="text"
        id="ZIP"
      />
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
