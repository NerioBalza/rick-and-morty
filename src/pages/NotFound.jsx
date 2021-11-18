import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout className="Not-found">
      <section className="Not-found__message">
        <h2>Error 404:</h2>
        <h3>Not Found</h3>
      </section>
      <section className="Not-found__link">
        <Link to="/">Go to Home</Link>
      </section>
    </Layout>
  );
};

export default NotFound;
