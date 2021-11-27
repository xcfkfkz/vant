import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectPro from './SelectPro';
import ChangeAmount from './ChangeAmount';
import './App.css';
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
import React, {useMemo, useState} from 'react';
import './App.css';

function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const c = useMemo(() => a + b, [a, b]);
  return (
    <div className="App">
      <header className="App-header">
        {a} + {b} = {c}
        <button onClick={() => setA(x => ++x)}>a+</button>
        <button onClick={() => setB(x => ++x)}>b+</button>
      </header>
    </div>
  );
}

export default App;
