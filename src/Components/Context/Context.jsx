import React, { useState, useEffect } from "react";
import DataContext from "./createContext";
import Main from "../Main";


function Context({ logo }) {
  const [data, setData] = useState(null);

  const wordsList = [
    "inspire",
    "excellence",
    "empower",
    "resilience",
    "innovate",
    "passion",
    "persevere",
    "ambition",
    "thrive",
    "adventure",
    "perseverance",
    "accomplish"
  ];

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
  };

  const fetchData = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => setData(data))
  };


  useEffect(() => {
    const randomWord = getRandomWord();
    fetchData(randomWord);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <DataContext.Provider value={{ data, fetchData }}>
        <Main logo={logo} />
      </DataContext.Provider>

  );
}

export default Context;
