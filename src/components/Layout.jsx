import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={"Main " + className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
