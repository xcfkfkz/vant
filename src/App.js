import React from 'react';
import { store, useSelector } from 'hodux';
import './App.css';
console.log('hello world, 你好 世界，nihao shijie, shijie nihao')
const context = store({
  a: 1,
  b: 1,
  get c() {
    return context.a + context.b
  }
});

function App() {
  const [a, b, c] = useSelector(() => [context.a, context.b, context.c]);
  return (
    <div className="App">
      <header className="App-header">
        {a} + {b} = {c}
        <button onClick={() => context.a++}>a+</button>
        <button onClick={() => context.b++}>b+</button>
      </header>
    </div>
  );
}

export default App;
