import { useEffect, useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import react from "react";

const App = () => {
  const [index, setIndex] = useState(null);
  const cards = [
    "https://source.unsplash.com/user/erondu/1600x900",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/collection/190727/1600x900",
    "https://source.unsplash.com/weekly?water",
    "https://source.unsplash.com/1600x900/?nature,water",
    "https://source.unsplash.com/user/erondu/1600x900",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/collection/190727/1600x900",
    "https://source.unsplash.com/weekly?water",
    "https://source.unsplash.com/1600x900/?nature,water",
  ];
  useEffect(() => {
    setIndex(0);
  }, []);
  const changeStateHandler = (i) => {
    setIndex(i);
  };
  return (
    <div className="container">
      {cards.map((item, i) => {
        return (
          <Panel
            key={i}
            url={cards[i]}
            index={i}
            isActive={index == i ? true : false}
            componentChangeStateHandler={(i) => changeStateHandler(i)}
          />
        );
      })}
    </div>
  );
};

export default App;
