import { useState, useEffect } from 'react';
import { ChatInput } from './ChatInput';
import { ChatBox } from './ChatBox';

type Props = {
  chat: { message: string; isUser: boolean }[];
  onSubmit: (prompt: string) => void;
};

export const ChatView = ({ chat, onSubmit }: Props) => {
  return (
    <div className="chat">
      <div className="chat-wrapper">
        <div className="header">
          <h2>Assitant powered by Ollama</h2>
        </div>
        <ChatBox chat={chat} />
        <ChatInput onSubmit={onSubmit} />
      </div>
    </div>
  );
};
