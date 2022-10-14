import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route 
              path="/about"
              element={<About />}
              />
              <Route 
              path="/"
              element={<About />}
              />
              <Route 
              path="/React-Portfolio"
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