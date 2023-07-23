import "./Button.css";

function Button(props) {
  const { name, onClick, disabled } = props;
  return (
    <button
      className="button"
      type="button"
      name={name}
      onClick={onClick}
      disabled={disabled}
    >
      {name}{" "}
    </button>
  );
}

export default Button;
