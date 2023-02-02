import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
        doloremque consectetur nostrum repudiandae pariatur sequi rem
        temporibus. Omnis asperiores sapiente dolorum suscipit repudiandae
        aspernatur repellat.
      </p>
      <p>
        Go to <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default PageNotFound;
