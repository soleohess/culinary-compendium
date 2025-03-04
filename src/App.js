import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './visualcomponents/Header';
import PropsButton from './functionalcomponents/PropsButton';
import Footer from './visualcomponents/Footer';

function App() {

  const GoogleButtonPress = () => {
    window.open("https://www.google.com", "_blank");
  };
  const googleButtonProps = {
    onPress: GoogleButtonPress,
    label: "Google",
    style: {
      backgroundColor: "#4285F4", // Blue background
      color: "white", // White text
      padding: "10px 20px", // Padding
      borderRadius: "5px", // Rounded corners
      border: "none", // No border
      cursor: "pointer", // Pointer cursor on hover
      fontSize: "16px" // Font size
    }
  };
  return (
    <div className="App">
      <Header className="App-header"/>
      <PropsButton {...googleButtonProps} />
      <Footer text="footer text" />
    </div>
  );
}

export default App;
