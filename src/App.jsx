import React from "react";
import Header from "./components/Header";
import Novita from "./components/Novita";
import RadioUscite from "./components/RadioUscite";
import AltroDaEsplorare from "./components/AltroDaEsplorare";
import Footer from "./components/Footer";
import NewReleases from "./components/NewReleases";

import "./App.css";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <Header />
      <main className="flex-grow-1">
        <Novita />
      </main>
      <main className="flex-grow-1">
        <RadioUscite />
      </main>
      <main className="flex-grow-1">
        <NewReleases />
      </main>
      <main className="flex-grow-1">
        <AltroDaEsplorare />
      </main>

      <Footer />
    </div>
  );
};

export default App;
