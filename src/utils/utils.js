import { CELL_ALIVE, CELL_DEAD, COLUMNS_COUNT, NEIGHBORS, NEIGHBORS_TWO, NEIGHBORS_THREE, ROWS_COUNT } from "./constants"

export function createTheWorld() {
  const firstGrid = []
  for (let i = 0; i < ROWS_COUNT; i++) {
    const gridRow = []
    for (let p = 0; p < COLUMNS_COUNT; p++) {
      gridRow.push(Math.floor(Math.random() * 2))
    }
    firstGrid.push(gridRow)
  }
  return firstGrid
}

export function startSimulation(grid) {

  const nextGeneration = grid.map((gridRow, i) => {
    return gridRow.map((gridColumn, k) => {
      let result = 0

      NEIGHBORS.forEach((neighbor) => {
        const item1 = i + neighbor[0]
        const item2 = k + neighbor[1]

        if (item1 >= 0 && item1 < ROWS_COUNT && item2 >= 0 && item2 < COLUMNS_COUNT) {
          result += grid[item1][item2]
        }
      })

      if(result < NEIGHBORS_TWO || result > NEIGHBORS_THREE) {
        return CELL_DEAD
      }
      if (result === NEIGHBORS_THREE) {
        return CELL_ALIVE
      }
      return grid[i][k]
    })
  })
  return nextGeneration
}