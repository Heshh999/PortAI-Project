import React from 'react';

  const Projects = () => (
    <div>
      <h1>Justin Gaskins' Projects</h1>
      <div className="project">
        <h3>AI Chatbot Portfolio</h3>
        <p>A React app with OpenAI-powered chatbot and resume generator.</p>
        <a href="https://github.com/yourusername/justin-gaskins-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="your-demo-url" target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
      <div className="project">
        <h3>Another Project</h3>
        <p>Brief description here.</p>
        <a href="link-to-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      {/* Add more projects as needed */}
    </div>
  );

  export default Projects;