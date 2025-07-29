import { useState } from "react";
import { DBBrand, DBHeader, DBPage } from "@db-ux/react-core-components";
import { Outlet } from "react-router";

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <DBPage
      variant="fixed"
      documentOverflow="auto"
      fadeIn
      header={
        <DBHeader
          drawerOpen={drawerOpen}
          onToggle={setDrawerOpen}
          brand={<DBBrand>Showcase</DBBrand>}
        ></DBHeader>
      }
    >
      <Outlet />
    </DBPage>
  );
}

export default App;
