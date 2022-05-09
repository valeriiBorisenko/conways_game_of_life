import { BUTTONS } from "../../../utils/constants";
import Button from "./Button/Button";

function ControlPannel(props) {
  const { clickCreate, clickStart, clickClear, started, grid } = props;

  return (
    <div className="control-pannel">
      <Button name={BUTTONS.CREATE} onClick={clickCreate} disabled={false} />
      <Button
        name={!started ? BUTTONS.START : BUTTONS.STOP}
        onClick={clickStart}
        disabled={grid.length === 0}
      />
      <Button
        name={BUTTONS.CLEAR}
        onClick={clickClear}
        disabled={grid.length === 0}
      />
    </div>
  );
}

export default ControlPannel;
