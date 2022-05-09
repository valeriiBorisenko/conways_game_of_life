export const ROWS_COUNT = 30;
export const COLUMNS_COUNT = 30;
export const ROWS_CSS = document.styleSheets[0].cssRules[0].style.setProperty(
  "--rows-count",
  ROWS_COUNT
);
export const COLUMNS_CSS =
  document.styleSheets[0].cssRules[0].style.setProperty(
    "--columns-count",
    COLUMNS_COUNT
  );
export const NEIGHBORS = [
  [1, 1],
  [-1, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [-1, 1],
  [1, -1],
];
export const NEIGHBORS_TWO = 2;
export const NEIGHBORS_THREE = 3;
export const CELL_DEAD = 0;
export const CELL_ALIVE = 1;
export const INTERVAL_TIMEOUT = 500;
export const BUTTONS = {
  CREATE: "Create",
  CLEAR: "Clear",
  START: "Start",
  STOP: "Stop",
};
