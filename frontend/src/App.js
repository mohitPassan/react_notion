import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tasksResponse = axios.get('http://localhost:5000/');
    
    tasksResponse
      .then((result) => {
        setTasks(result.data);
      })
      .catch((err) => {
        setError(err);
      })
  }, [tasks.length, error]);

  return (
    <div className="App">
      {
        !error ? (
          <>
            {
              tasks.length !== 0 ? (
                <ul>
                  {
                    tasks.map((task) => <li key={task.task}>{task.task}: {task.status ? "Done" : "Pending"}</li>)
                  }
                </ul>
              ) : (
                <h2>No tasks</h2>
              )
            }
          </>
        ) : (
          <h1>Error aagya</h1>
        )
      }
    </div>
  );
}

export default App;
