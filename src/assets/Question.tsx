import { useState } from "react";

function Question({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  return (
    <div onClick={handleClick}>
      {!flipped && <div className="card">{question}</div>}

      {flipped && <div className="card-back">{answer}</div>}
    </div>
  );
}

export default Question;
