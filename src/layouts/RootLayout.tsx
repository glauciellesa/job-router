import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../menu/Navbar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
        <Breadcrumbs />
      </header>
      <main>
        {/* <Outlet/> this component is responsable to say to react router where we want, 
        inside this RootLayout component, output theses pages componentes when we go to different paths */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
