import React, { useState } from "react";

function Character({ person }) {
  const [showHomeworld, setShowHomeworld] = useState(false);
  return (
    <div
      className="character-card"
      onClick={() => setShowHomeworld(!showHomeworld)}
    >
      <h3 className="character-name">{person.name}</h3>
      {showHomeworld && (
        <p className="character-planet">Planet: {person.homeworld}</p>
      )}
    </div>
  )
}

export default Character;