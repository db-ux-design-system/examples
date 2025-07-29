import {
  DBButton,
  DBControlPanelSecondaryActions,
  DBTooltip,
} from "@db-ux/react-core-components";

const SecondaryActions = () => (
  <DBControlPanelSecondaryActions>
    <DBButton
      noText
      variant="ghost"
      icon="clock"
      onClick={() => alert("Clock")}
    >
      Clock
      <DBTooltip>Clock</DBTooltip>
    </DBButton>
    <DBButton variant="ghost" icon="plus" onClick={() => alert("Add")}>
      Add
      <DBTooltip>Add</DBTooltip>
    </DBButton>
  </DBControlPanelSecondaryActions>
);

export default SecondaryActions;
