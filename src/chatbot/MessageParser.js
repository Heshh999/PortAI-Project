import React from 'react';
  import ActionProvider from './ActionProvider';

  class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse = async (message) => {
      try {
        const response = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        });
        const data = await response.json();
        this.actionProvider.handleResponse(data.response);
      } catch (error) {
        this.actionProvider.handleDefault();
      }
    };
  }

  export default MessageParser;