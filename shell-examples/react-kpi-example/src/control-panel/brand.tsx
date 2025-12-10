import { DBControlPanelBrand } from "@db-ux/react-core-components";
import { Link } from "@tanstack/react-router";
import { HOME_PATH } from "@/routes/__navigation.tsx";

const Brand = () => (
  <DBControlPanelBrand>
    <Link to={HOME_PATH}>KPIs</Link>
  </DBControlPanelBrand>
);

export default Brand;
