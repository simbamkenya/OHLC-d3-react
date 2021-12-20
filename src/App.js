import './App.css';
import React, { useState, createContext } from 'react'
import Sidebar from './components/Sidebar'
import Chart from './components/Chart';
import { CryptoProvider } from './CryptoContext';



function App() {
  return (
    <div className="App">
      <div className="grid-container">
       <CryptoProvider>
          <Sidebar className="grid-sidebar" />
          <div className="header"/>
          <div className="content"> 
          <Chart />
          <h1>HHHH</h1>
          </div>
        </CryptoProvider>
        
      </div>
    </div>
  );
}

export default App;
