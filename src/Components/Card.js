import React, { useState } from "react";

function Card({ id, question, answer, onClick, selectedId }) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`card ${id === selectedId ? "active" : null}`}
    >
      {id === selectedId ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}

export default Card;
