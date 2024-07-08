import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/items/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Item List</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
