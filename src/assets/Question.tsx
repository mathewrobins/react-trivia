import { useState } from "react";

function Question() {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  return (
    <div onClick={handleClick}>
      {!flipped && <div className="card">Question</div>}

      {flipped && <div className="card-back">Answer</div>}
    </div>
  );
}

export default Question;
