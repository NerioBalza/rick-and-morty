import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "pages";
import "styles/Index.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterProfile />} />
      */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
