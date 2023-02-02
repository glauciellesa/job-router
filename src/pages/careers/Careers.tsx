import { Link, useLoaderData } from "react-router-dom";

type MyLoaderData = {
  map(arg0: (career: any) => void): import("react").ReactNode;
  careers: [];
};

const Careers = () => {
  const careers = useLoaderData() as MyLoaderData;

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");
  return response.json();
};
