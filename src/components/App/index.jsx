import { useState } from 'react'
import './styles.css'
import axios from 'axios'

// === Modules
import List from '../List'


function App() {
  const [count, setCount] = useState(0)

  const Lists = axios({
    method: 'get',
    url: 'http://localhost:3002/lists',
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);})

  return (
    <div className="App">
      <List />
    </div>
  );
};

export default App
