import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Example from "./components/Example/Example";
import CodePlayground from "./components/CodePlayground/CodePlayground";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">
        <Example />
        <CodePlayground />
      </main>
    </div>
  );
}

export default App;
