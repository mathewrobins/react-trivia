import { useState } from "react";

function Question() {
  const [flipped, setFlipped] = useState(false);

  function handleClick() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  return (
    <div onClick={handleClick}>
      Question
      {/* {question}
      {answer} */}
    </div>
  );
}

export default Question;
