import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  const [people, setPeople] = useState([]);

  console.log(people);

  const getData = async () => {
    const { data: peeps } = await axios.get(urlPeople);
    const { data: planets } = await axios.get(urlPlanets);
    for (let p of peeps) {
      const planet = planets.find(planet => planet.id === p.homeworld)
      p.homeworld = planet.name
    }
    setPeople(peeps);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {people.map((person, index) => (
        <Character key={index} person={person} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
if (typeof module !== 'undefined' && module.exports) module.exports = App
