import React from "react";
import "./App.css";

import PageHeader from "./components/PageHeader";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="body">
      <PageHeader />
      <Highlight />
      <Footer />
    </div>
  );
}

export default App;
