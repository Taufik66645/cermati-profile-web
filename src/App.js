import React from "react";
import "./App.css";

import CookieSection from ".//components/cookieSection";
import PageHeader from "./components/PageHeader";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="body">
      <span>
        <CookieSection />
      </span>
      <PageHeader />
      <Highlight />
      <Footer />
      <Newsletter />
    </div>
  );
}

export default App;
