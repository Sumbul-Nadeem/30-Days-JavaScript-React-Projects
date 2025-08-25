import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage';
import "./App.css";
import {Toggle} from "./Components/Toggle";


const App = () => {

  const [isDark, setIsDark ] = useState(true);

  return (
    <div className='App' data-theme = {isDark ? "dark" : "light"}>
        <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}/>
        <h1 className='title'>Hello World</h1>
        <div className='box'>
          <h2>This is a box</h2>
        </div>
    </div>
  )
}

export default App
