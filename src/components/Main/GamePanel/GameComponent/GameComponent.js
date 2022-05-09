import "./GameComponent.css";

function GameComponent(props) {
  const { status, id } = props;
  return (
    <li
      className={`game-component${status === 1 ? " game-component_alive" : ""}`}
      key={id}
    />
  );
}

export default GameComponent;
