import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import React from 'react';
import Counter from './Counter';
import Form from './Form';
import TodoComponent from './TodoComponent';
import About from './About';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Form />
      <hr />
      <TodoComponent />
      <hr />
      {/* <link to ="/about">About</link> */}
    </div>
    
  );
}


export default App;
