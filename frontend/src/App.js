// src/App.js

import React from 'react';
import './App.css';
import Header_up from './components/Header_up';
import Header_down from './components/Header_down';


function App() {
    return (
        <div className="App">
            <Header_up/>  
            <Header_down/>  
        </div>
    );
}


export default App;