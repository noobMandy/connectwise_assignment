import React, { useState } from "react";
import DraggableComponent from "./DraggableComponent";
import './App.css';

const App = () => {
  const [parents, setParents] = useState([]);

  const addParent = () => {
    setParents([
      <DraggableComponent key={parents.length}>{parents}</DraggableComponent>,
    ]);
  };

  return (
    <div className="App">
      <button onClick={addParent}>AddParent</button>
      <DraggableComponent>{parents}</DraggableComponent>
    </div>
  );
};

export default App;
