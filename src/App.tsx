import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Example from "./components/Example/Example";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Example />
      </main>
    </div>
  );
}

export default App;
