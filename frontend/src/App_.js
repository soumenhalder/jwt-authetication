// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header_up from './components/Header_up';
import Header_down from './components/Header_down';
import SignInPage from './components/SignInPage'; // Import SignInPage component

function App() {
    return (
        <Router>
            <div className="App">
                <Header_up />
                <Switch>
                    <Route path="/signin">
                        <SignInPage />
                    </Route>
                    <Route path="/">
                        <Header_down />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
