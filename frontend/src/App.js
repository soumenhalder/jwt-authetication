// App.js

import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header_up from './components/Header_up';
import Header_down from './components/Header_down';
//import SignInPage from './pages/Signin/SignInPage.js'; // Import SignInPage component

function App() {
    return (
        <div className="App">
            <Header_up/>  
            <Header_down/>  
        </div>
    );
}
export default App;
