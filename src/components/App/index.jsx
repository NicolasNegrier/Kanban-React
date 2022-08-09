import {  useEffect, useLayoutEffect, useState } from 'react';
import './styles.css';


// === Modules
import { useDispatch } from 'react-redux';
import { getLists } from '../../actions/list';
import Project from '../Project';

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
