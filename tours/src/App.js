import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Loading from './Loading'
import Tours from './Tours'
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const reponse = await axios.get(url)
      setLoading(false)
      let tours = reponse.data
      setTours(reponse.data);    
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
    
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <div>
        <h1>$</h1>
      </div>
    </main>
  );
}

export default App;
