import GameComponent from "./GameComponent/GameComponent";
import "./GamePanel.css";

function GamePanel(props) {
  const { grid } = props;
  return (
    <ul className="game-panel">
      {grid &&
        grid.map((rows, l) =>
          rows.map((columns, k) => (
            <GameComponent status={columns} key={`${l}-${k}`} />
          ))
        )}
    </ul>
  );
}

export default GamePanel;
