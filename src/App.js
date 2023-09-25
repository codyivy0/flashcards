import "./App.css";
import React from "react";
import { useState } from "react";
import Card from "./Components/Card";
import { questions } from "./questions";

function App() {
  const [list, setList] = useState(questions);
  const [selectedId, setSelectedId] = useState(null);


  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="App">
      {list.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          onClick={handleClick}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
}

export default App;
