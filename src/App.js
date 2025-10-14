import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  import { Chatbot } from 'react-chatbot-kit';
  import 'react-chatbot-kit/build/main.css';
  import About from './components/About';
  import Projects from './components/Projects';
  import Resume from './components/Resume';
  import Contact from './components/Contact';
  import ActionProvider from './chatbot/ActionProvider';
  import MessageParser from './chatbot/MessageParser';
  import config from './chatbot/config';
  import './App.css';

  function App() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className="chatbot-container">
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
              headerText="Hi! I'm Justin Gaskins' Personal AI Assistant"
              placeholderText="Ask me about Justin Gaskins' portfolio!"
            />
          </div>
        </div>
      </Router>
    );
  }

  export default App;