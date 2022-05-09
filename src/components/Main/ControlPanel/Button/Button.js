import "./Button.css";

function Button(props) {
  return (
    <button
      className="button"
      type="button"
      name={props.name}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}{" "}
    </button>
  );
}

export default Button;
