import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectPro from './SelectPro';
import ChangeAmount from './ChangeAmount';
import './App.css';
console.log('sdsfsdfsd niishdfdfsdfdfdff是的发生地非法所得')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/selectPro" element={<SelectPro />} />
            <Route path="/changeAmount" element={<ChangeAmount />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
