import logo from './logo.svg';
import './App.css';
// 主分支上的一些提交
// 切出feat分支后，main分支上继续有提交
// feat分支上开始提交内容
// feat分支上提交内容2
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
