import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main-container">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
