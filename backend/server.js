const express = require('express');
  const cors = require('cors');
  const OpenAI = require('openai');
  require('dotenv').config();

  const app = express();
  app.use(cors());
  app.use(express.json());

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    const prompt = `You are Justin Gaskins' personal AI assistant. Respond helpfully about my portfolio: I'm Justin Gaskins, a developer skilled in React and AI. My projects include AI Chatbot Portfolio, Resume Generator. Keep responses engaging and professional. User said: ${message}`;
    
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json({ response: completion.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: 'AI service unavailable' });
    }
  });

  app.post('/api/resume', async (req, res) => {
    const { name, email, experience, skills, education } = req.body;
    
    const prompt = `Generate a professional resume in markdown format for ${name}. 
    Include sections: Contact (name, email), Experience (${experience}), Skills (${skills}), Education (${education}). 
    Make it concise, ATS-friendly, and engaging. Output only the markdown.`;
    
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json({ resume: completion.choices[0].message.content });
    } catch (error) {
      res.status(500).json({ error: 'Resume generation failed' });
    }
  });

  app.listen(5000, () => console.log('Server running on port 5000'));