import classes from "./Notification.module.css";

function Notification(props) {
  let specialClasses = "";

  if (props.status === "error" || props.status === "success") {
    specialClasses = classes[props.status];
  }

  const cssClasses = `${classes.Notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
}
