import React, { useState } from "react";
import data from "./data";
import List from "./List";
const Home = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>{people.length} birthday today </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  );
};

export default Home;
