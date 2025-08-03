import { useRouteError,Link } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
  return (
    <div className="error-page">
      <img src="https://foodfire-chapter07.netlify.app/404%20Error.59df4a5e.jpg" alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
}

export default Error;