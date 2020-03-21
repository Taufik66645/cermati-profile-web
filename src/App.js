import React from "react";
import "./App.css";

import CookieSection from ".//components/cookieSection";
import PageHeader from "./components/PageHeader";
import Highlight from "./components/Highlight";


function App() {
  return (
    <div className="body">
      <CookieSection />
      <PageHeader />
      <Highlight />
    </div>
  );
}

export default App;
