import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'

//used due to multiple paths to the same component
const About2 = () => 
  useRoutes([
    {path:"/", element: <About />},
    {path:"/about", element: <About />},
    {path:"React-Portfolio", element: <About />}
  ])

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
          {/* This tag needs to be within Router tags, but not within Routes as its not a react componet or fragment  */}
          <About2 />
            <Routes>
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