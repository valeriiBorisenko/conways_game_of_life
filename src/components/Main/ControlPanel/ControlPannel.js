import Button from "./Button/Button";

function ControlPannel (props) {

  const {clickCreate, clickStart, clickClear, started, grid} = props

  return(
    <div className='control-pannel'>
      <Button 
        name={"Create"} 
        onClick={clickCreate} 
        disabled={false}
      />
      <Button 
        name={!started? "Start" : "Stop"} 
        onClick={clickStart}
        disabled={grid.length === 0}
      />
      <Button 
        name={"Clear"} 
        onClick={clickClear}
        disabled={grid.length === 0}
      />

    </div>
  )
}

export default ControlPannel;