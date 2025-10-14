import React from 'react';

  class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleResponse(response) {
      const botMessage = this.createChatBotMessage(response);
      this.updateChatbotState(botMessage);
    }

    handleDefault() {
      const message = this.createChatBotMessage("Sorry, I didn't understand. Try asking about Justin Gaskins' projects!");
      this.updateChatbotState(message);
    }

    updateChatbotState(message) {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }

  export default ActionProvider;