import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout className="Home">
      <section className="Home__hero">
        <h1>Hola</h1>
        <Link to="/characters">See Characters</Link>
      </section>
      <section className="Home__carousel"></section>
    </Layout>
  );
};

export default Home;
