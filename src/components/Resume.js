import React, { useState } from 'react';
  import jsPDF from 'jspdf';

  const Resume = () => {
    const [formData, setFormData] = useState({
      name: 'Justin Gaskins',
      email: 'justin@example.com',
      experience: 'Web Developer with React and AI skills. Built portfolio with chatbot and resume generator.',
      skills: 'React, JavaScript, OpenAI API, Node.js',
      education: 'Bachelor in Computer Science, Kean University, 2023'
    });
    const [generatedResume, setGeneratedResume] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateResume = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/resume', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        setGeneratedResume(data.resume);
      } catch (error) {
        setGeneratedResume('Error generating resume. Try again!');
      }
      setLoading(false);
    };

    const downloadPDF = () => {
      const doc = new jsPDF();
      doc.text(generatedResume, 10, 10);
      doc.save('Justin-Gaskins-Resume.pdf');
    };

    return (
      <div>
        <h1>Generate Justin Gaskins' Resume</h1>
        <p>Fill in details (or use defaults) and let AI create a professional resume!</p>
        
        <form>
          <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
          <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          <textarea name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience" rows="3" />
          <textarea name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills" rows="2" />
          <textarea name="education" value={formData.education} onChange={handleInputChange} placeholder="Education" rows="2" />
          <button type="button" onClick={generateResume} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Resume'}
          </button>
        </form>

        {generatedResume && (
          <div>
            <h2>Generated Resume</h2>
            <pre>{generatedResume}</pre>
            <button onClick={downloadPDF}>Download PDF</button>
          </div>
        )}
      </div>
    );
  };

  export default Resume;