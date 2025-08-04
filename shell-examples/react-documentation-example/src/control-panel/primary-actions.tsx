import {
  DBButton,
  DBControlPanelPrimaryActions,
  DBTooltip,
} from "@db-ux/react-core-components";

const PrimaryActions = () => (
  <DBControlPanelPrimaryActions>
    <DBButton
      noText
      variant="ghost"
      icon="magnifying_glass"
      onClick={() => alert("Search")}
    >
      Search
      <DBTooltip>Search</DBTooltip>
    </DBButton>
  </DBControlPanelPrimaryActions>
);

export default PrimaryActions;
