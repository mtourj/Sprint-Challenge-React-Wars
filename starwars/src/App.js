import React, { useState, useEffect } from "react";
import "./App.css";

import { Spinner } from "reactstrap";

import axios from "axios";

import Person from "./Person";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  const fetchData = url => {
    setPeople([]);
    setNext(null);
    setPrevious(null);
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setPeople(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const goNext = () => {
    fetchData(next);
  };

  const goPrev = () => {
    fetchData(previous);
  };

  useEffect(() => fetchData("https://swapi.co/api/people"), []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="people">
        {people.length > 0 ? (
          people.map(person => <Person key={person.name} name={person.name} />)
        ) : (
          <Spinner color='light' />
        )}
      </div>
      <div className="page-select">
        {previous ? <button onClick={goPrev}>Prev</button> : null}
        {next ? <button onClick={goNext}>Next</button> : null}
      </div>
    </div>
  );
};

export default App;
