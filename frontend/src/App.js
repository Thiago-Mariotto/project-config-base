import React, { useEffect, useState } from 'react';
import './App.css';
import api from './utils/api';

function App() {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    api.get('/').then(response => { setInstructors(response.data) });
  }, []);


  return (
    <div className="App">
      <div className="App-header">
        <p>Proggraming Languages</p>
        {
          instructors.map(p => (
            <span>{p.name} - {p.creator}</span>
          ))}
      </div>
    </div>
  );
}

export default App;
