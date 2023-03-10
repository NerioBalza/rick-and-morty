import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children, className, showFooter } = props;

  return (
    <>
      <Header />

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
