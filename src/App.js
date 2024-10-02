import './App.css';
import React from 'react';

import Signup from "./component/Signup";
import Login from "./component/Login";
import styled from 'styled-components';


function App() {

  return (
    <div className="App">
        <Signup></Signup>

        <Login></Login>

       </div>
  );
}

export default App;
