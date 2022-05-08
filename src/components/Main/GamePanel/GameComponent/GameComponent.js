import './GameComponent.css'

function GameComponent(props) {

  return(
    <li 
      className={`game-component${props.status === 1 ? ' game-component_alive' : ""}`} 
      key={props.id}
    />
  )
}

export default GameComponent;