import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Example from "./components/Example/Example";
import CodePlayground from "./components/CodePlayground/CodePlayground";
import LogsContainer from "./components/LogsContainer/LogsContainer";
import MetricsPanel from "./components/MetricsPanel/MetricsPanel";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">
        <Example />
        <CodePlayground />
        <LogsContainer/>
      </main>
      <MetricsPanel/>
    </div>
  );
}

export default App;
