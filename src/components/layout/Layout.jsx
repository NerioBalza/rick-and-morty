import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children, className, showFooter, back } = props;

  return (
    <>
      <Header back={back} />

      <main className={`layout ${className}`}>
        <>{children}</>
      </main>

      {showFooter && <Footer />}
    </>
  );
};

Layout.defaultProps = {
  showFooter: true,
};

export default Layout;
