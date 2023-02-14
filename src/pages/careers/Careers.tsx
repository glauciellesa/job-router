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
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careerss");
  if (!response.ok) {
    throw Error("Could not fetch careers");
  }
  return response.json();
};
