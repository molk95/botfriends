import React from "react";
import { CardList } from "./components/CardList";
import { Data } from "./Data";

function App() {
  return (
    <div>
      <CardList Data={Data} />
    </div>
  );
}

export default App;
