import { useEffect, useState } from 'react'
import './styles.css'


// === Modules
import Project from '../Project'
import { useDispatch } from 'react-redux'
import { getLists } from '../../actions/list';


function App() {

  const dispatch = useDispatch();
  console.log('dans APP');
  
  useEffect(() => {
    console.log('useEffect');
    dispatch(getLists());
  }, []);


  return (
    <div className="App">
      <Project />
    </div>
  );
};

export default App
