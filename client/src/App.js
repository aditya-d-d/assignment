import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/matches')
      .then(res => setMatches(res.data))
      .catch(err => console.error('Error fetching matches:', err));
  }, []);

  return (
    <div className="app">
      <h1>⚽ Upcoming Football Matches</h1>
      <div className="match-list">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
          <h2>{match.title}</h2>
          <p><strong>Date:</strong> {new Date(match.date).toLocaleString()}</p>
          <p>
            <span className="team">{match.team1.name}</span> vs <span className="team">{match.team2.name}</span>
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
