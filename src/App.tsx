import "./App.css";
import Question from "./assets/Question";

function App() {
  // const question = "Who are you?"
  // const answer = "Me"
  const question = [
    {
      id: 1,
      question: "What was the name of Hagrid's Norwegian Ridgeback dragon?",
      answer: "Norbert",
    },
    {
      id: 2,
      question:
        "Cho Chang played in which position in the Ravenclaw Quidditch team?",
      answer: "Seeker",
    },
    {
      id: 3,
      question: "Who did Ron beat to become the Quidditch keeper?",
      answer: "Cormac",
    },
  ];

  return (
    <>
      <h1>Trivia Game</h1>
      <div>
        <div className="container">
          <Question
            key={question[1].id}
            question={question[1].question}
            answer={question[1].answer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
