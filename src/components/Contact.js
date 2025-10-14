import React, { useState } from 'react';

  const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Thanks for your message, Justin Gaskins will get back to you! Message: ${message}`);
      setMessage('');
    };

    return (
      <div>
        <h1>Contact Justin Gaskins</h1>
        <p>Email: justin@example.com | LinkedIn: linkedin.com/in/justingaskins</p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };

  export default Contact;