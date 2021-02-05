import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import "./App.css";

function App() {
  const cardsColours = ["red", "green", "blue", "yellow", "purple"];
  const cardsShapes = ["square", "circle", "rectangle", "triangle"];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [options, setOptions] = useState({ card1: [], card2: [], card3: [] });

  const createCardsContents = () => {
    const container = [];
    // checks if array is already in container
    const isArrayInContainer = (arr) => {
      const containerString = JSON.stringify(container);
      const arrayString = JSON.stringify(arr);
      if (containerString.includes(arrayString)) {
        return true;
      } else {
        return false;
      }
    };

    for (let i = 0; i < 3; i++) {
      // get a random number to use as index for accessing arrays
      const colourIndex = Math.floor(Math.random() * cardsColours.length);
      const textIndex = Math.floor(Math.random() * cardsColours.length);
      const shapeIndex = Math.floor(Math.random() * cardsShapes.length);
      const colourSelection = cardsColours[colourIndex];
      const textSelection = cardsColours[textIndex];
      const shapeSelection = cardsShapes[shapeIndex];
      const selectionArray = [colourSelection, textSelection, shapeSelection];
      // Selection array should not be identical to a one before
      if (isArrayInContainer(selectionArray)) {
        i--;
      } else {
        container.push(selectionArray);
      }
    }
    setOptions({
      card1: container[0],
      card2: container[1],
      card3: container[2],
    });
  };

  // cards will load automatically when mounted
  useEffect(() => {
    createCardsContents();
  }, []);

  const isCardPreviouslySelected = (card) => {
    const selectedCardsString = JSON.stringify(selectedCards);
    const cardString = JSON.stringify(card);
    return selectedCardsString.includes(cardString);
  };

  const handleClick = (key) => {
    const clickedCard = options[key];
    if (isCardPreviouslySelected(clickedCard)) {
      if (bestScore < score) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setScore(score + 1);
      // get previous selected cards arrays and make new array using
      // them and newly selected card
      setSelectedCards([...selectedCards, clickedCard]);
    }
    createCardsContents();
  };

  return (
    <div className="App">
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <div className="cards-container">
        <Card
          onClick={() => {
            handleClick("card1");
          }}
          textColour={options.card1[0]}
          text={options.card1[1]}
          shape={options.card1[2]}
        />
        <Card
          onClick={() => {
            handleClick("card2");
          }}
          textColour={options.card2[0]}
          text={options.card2[1]}
          shape={options.card2[2]}
        />
        <Card
          onClick={() => {
            handleClick("card3");
          }}
          textColour={options.card3[0]}
          text={options.card3[1]}
          shape={options.card3[2]}
        />
      </div>
    </div>
  );
}

export default App;
