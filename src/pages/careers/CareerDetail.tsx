import { useLoaderData, useParams } from "react-router-dom";

const CareerDetail = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.

  const career: any = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Datail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          illo rem tenetur quisquam aliquam repellendus maiores ea eius sapiente
          reiciendis vitae in, at modi ullam nam qui porro consequatur
          praesentium?
        </p>
      </div>
    </div>
  );
};

export default CareerDetail;

export const careerDetailLoader = async ({ params }: any) => {
  const { id } = params;
  const response = await fetch("http://localhost:4000/careers/" + id);
  if (!response.ok) {
    //Response have a ok property, so if it is true the response will be ok we have this data if it is false it's because we don't.
    throw Error("Could not find that career");
  }

  return response.json();
};
