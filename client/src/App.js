import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Home';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path='/'
                element={<Homepage />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
              <Route
                path="/portfolio"
                element={<Portfolio />}
              />
              <Route
              path="/resume"
              element={<Resume />}
            />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;