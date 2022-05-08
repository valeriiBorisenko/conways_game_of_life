import GameComponent from './GameComponent/GameComponent';
import './GamePanel.css'

function GamePanel(props) {

  return(
    <ul className="game-panel">
      {props?.grid && props?.grid.map((rows, l) => 
        rows.map((columns, k) => 
          <GameComponent
            status={columns}
            id={`${l}-${k}`}
          />
        )
      )}
    </ul>
  )
}

export default GamePanel;