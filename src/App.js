import React from "react";
import "./App.css";

import CookieSection from ".//components/cookieSection";
import PageHeader from "./components/PageHeader";
import Highlight from "./components/Highlight";

import Footer from "./components/Footer";

// import Test from "./components/test";

function App() {
  return (
    <div className="body">
      <CookieSection />
      <PageHeader />
      <Highlight />
      <Footer />

      {/* <Test /> */}
    </div>
  );
}

export default App;
