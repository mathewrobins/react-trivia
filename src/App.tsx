import "./App.css";
import Question from "./assets/Question";

function App() {
  // const question = "Who are you?"
  // const answer = "Me"

  return (
    <>
      <h1>Trivia Game</h1>
      <div className="container">
        <div className="card">
          <Question />
        </div>
      </div>
    </>
  );
}

export default App;
