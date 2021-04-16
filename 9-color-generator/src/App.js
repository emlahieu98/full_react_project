import React, {useState} from 'react'
import './App.css';
import Values from "values.js";
import Single from "./SingleColor"

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
          <button type="submit" className="btn" placeholder="#f15025"></button>
        </form>
      </section>
      <section className="colors"></section>
    </>
  );
}

export default App;
