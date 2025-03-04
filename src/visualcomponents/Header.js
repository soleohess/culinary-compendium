import React from 'react';

function Header(props) {
    return (
        <header className='App-header'>
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>Teacher Assistant App</h1>
          <p>Your digital classroom helper</p>
        </div>
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        </header>
    );
}

export default Header;