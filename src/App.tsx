import * as React from 'react';
import Home from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <div className="app">
        <Header/>
        <div className="container">
          <section className="app__content">
            <Home />
          </section>
        </div>
    </div>
  );
}

export default App;
