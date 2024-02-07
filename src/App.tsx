import "./App.css";
import Question from "./assets/Question";

function App() {
  // const question = "Who are you?"
  // const answer = "Me"
  const question = {
    id: "1",
    question: "What was the name of Hagrid's Norwegian Ridgeback dragon?",
    answer: "Norbert",
  };

  return (
    <>
      <h1>Trivia Game</h1>
      <div>
        <div className="container">
          <Question
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
