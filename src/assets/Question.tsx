import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

function Question(props: Props) {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  return (
    <div onClick={handleClick}>
      {!flipped && <div className="card">{props.question}</div>}

      {flipped && <div className="card-back">{props.answer}</div>}
    </div>
  );
}

export default Question;
