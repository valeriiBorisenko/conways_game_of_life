import './Main.css'

import { useEffect, useState } from 'react';
import useInterval from 'use-interval';
import { createTheWorld, startSimulation } from '../../utils/utils'
import ControlPanel from './ControlPanel/ControlPannel';
import GamePanel from './GamePanel/GamePanel';
import { INTERVAL_TIMEOUT } from '../../utils/constants';

function Main () {

  const [grid, setGrid] = useState([])
  const [started, setStarted] = useState(false)

  function clickClearWorld() {
    setGrid([])
  }

  function clickCreateTheWorld() {
    clickClearWorld()
    setGrid(createTheWorld())
    setStarted(false)
  }

  function clickStartSimulation() {
    setStarted(!started)
  }

  useEffect(() => {
    setGrid(createTheWorld())
  },[])

  useInterval(() => {
    setGrid(startSimulation(grid))
  }, started ? INTERVAL_TIMEOUT : null)
  
  return (
    <main className='main'>
      <ControlPanel 
        clickCreate={clickCreateTheWorld}
        clickClear={clickClearWorld}
        clickStart={clickStartSimulation}
        started={started}
        grid={grid}
      />
      <GamePanel 
        grid={grid}
      />
    </main>
  )
}

export default Main;