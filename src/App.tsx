import { useState } from "react";
import "./App.css";
import Question from "./assets/Question";
import Direction from "./assets/Direction";

function App() {

  const questions = [
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
    {
      id: 4,
      question: "Who did Harry Potter share his first kiss with?",
      answer: "Cho Chang",
    },
    {
      id: 5,
      question: "Who killed Dobby the House Elf?",
      answer: "Bellatrix Lestrange",
    },
    {
      id: 6,
      question: "Who played the role of Ron Weasley in the 'Harry Potter' movie series?",
      answer: "Rupert Grint",
    },
    {
      id: 7,
      question: "Complete this character's name 'Ronald ____",
      answer: "Weasley",
    },
    {
      id: 8,
      question: "The supposed murder of who was one of the reasons Sirius was sent to Azkaban?",
      answer: "Peter Pettigrew",
    },
    {
      id: 9,
      question: "Who is the landlord of The Leaky Cauldron?",
      answer: "Tom",
    },
    {
      id: 10,
      question: "Who played the ghost 'nearly headless Nick'?",
      answer: "John Cleese",
    },
    {
      id: 11,
      question: "Complete this character's name 'Rita ____'",
      answer: "Skeeter",
    },
    {
      id: 12,
      question: "Moody transfigures who into a ferret as a punishment?",
      answer: "Draco",
    },
    {
      id: 13,
      question: "What is the name of Harry Potter's owl?",
      answer: "Hedwig",
    },
    {
      id: 14,
      question: "What is missing from the well-known title: 'Harry Potter and the ... Prince?",
      answer: "Half-Blood",
    },
    {
      id: 15,
      question: "What is Hagrid?",
      answer: "Half-Giant",
    },
    {
      id: 16,
      question: "What was Professor Lupin?",
      answer: "Werewolf",
    },
    {
      id: 17,
      question: "Who returned as Potions Master in the Half-Blood Prince?",
      answer: "Horace Slughorn",
    },
    {
      id: 18,
      question: "Who was Harry Potter's mother?",
      answer: "Lily Evans",
    },
    {
      id: 19,
      question: "What relation of Harry Potter is Vernon Dursley?",
      answer: "Uncle",
    },
    {
      id: 20,
      question: "What was the name of Professor Dumbledore's sister?",
      answer: "Ariana",
    }
  ];

  // interface NavButtonProps {
  //   direction: string;
  // }

  const numQuestions = questions.length
  const [index, setIndex] = useState(0)

  function handleClick(direction: string){
    if (direction === "back"){
      if (index > 0){
        setIndex(index - 1);
      }
    }
    if (direction === "forward"){
      if (index < numQuestions-1){
        setIndex(index + 1);
      }
    }
    console.log(index);
  }


  return (
    <>
      <h1>Trivia Game</h1>
        <div className="container">

          <Question
            key={questions[index].id}
            question={questions[index].question}
            answer={questions[index].answer}
          />
          <div className = "bottom">
 
              <Direction 
                direction = "back" 
                key = "back"
                onClick = {()=>{ handleClick("back")}}
              />
              <Direction 
                direction = "forward" 
                key = "forward"
                onClick = {()=>{ handleClick("forward")}}
              />
          </div>
        </div>
    </>
  );
}

export default App;
