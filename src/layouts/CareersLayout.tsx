import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem velit
        vero ratione commodi quae sunt est sapiente quo? Ex, incidunt?
      </p>

      <Outlet />
    </div>
  );
};

export default CareersLayout;
