import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Carousel from "../components/templates/Carousel";

const Home = () => {
  return (
    <Layout className="Home">
      <section className="Home__hero">
        <h1>Find your favorite Rick & Morty's characters.</h1>
        <Link to="/characters">Start Searching</Link>
      </section>
      <Carousel id="carousel1" />
    </Layout>
  );
};

export default Home;
