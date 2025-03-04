import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PropsButton from './components/PropsButton';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the Culinary Compendium</h1>
            </header>
            <main>
                <p>Explore a world of recipes and culinary delights!</p>
            </main>
        </div>
    );
}

export default App;