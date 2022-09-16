import {  useEffect, useLayoutEffect, useState } from 'react';
import './styles.css';


// === Modules
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../../actions/list';
import Project from '../Project';
import Header from '../Header';
import { getCards } from '../../actions/card';


function App() {

  const dispatch = useDispatch();
  // const lists = useSelector(state => state.lists.lists)
  // const projectId = useSelector(state => state.lists);
  // console.log('projectid dans APP==>',projectId);
  
  useEffect(() => {
    dispatch(getLists());
    dispatch(getCards());
  }, []);


  return (
    <div className="app">
      <Header />
      <Project />
    </div>
  );
};

export default App
