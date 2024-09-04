import React, { useState } from 'react';
import axios from 'axios';

interface ChatProps {
  isLightOn: boolean;
  toggleLight: (newStatus: boolean) => void;
}

const Chat: React.FC<ChatProps> = ({ isLightOn, toggleLight }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `You: ${input}`]);

    try {
      const response = await axios.post('/api/lightbulb', {
        useAI: true,
        message: input,
      });

      const { status } = response.data;
      
      toggleLight(status);
      setMessages((prev) => [...prev, `Bot: Light is now ${status ? 'on' : 'off'}`]);
    } catch (error) {
      setMessages((prev) => [...prev, 'Bot: Error toggling light']);
    }

    setInput('');
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center py-4">
      <div className="border min-h-20 rounded-t-md w-full p-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="my-1">
            {msg}
          </div>
        ))}
      </div>

      <div className="mb-4 w-full bg-transparent flex items-center justify-normal border rounded-br-md rounded-bl-md border-gray-300 focus-within:border-[#db3cff] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]">
        <input
          className="rounded-bl-md h-full w-[95%] text-gray-800 text-sm md:text-base py-2 md:py-[11px] px-3 md:px-[15px] leading-tight focus:outline-none border-none ring-0 focus:ring-0"
          type="text"
          placeholder="Type a command..."
          data-cy="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button
          onClick={handleSend}
          data-cy="chat-send"
          className='bg-purple-600 h-full hover:bg-purple-500 border-none ring-0 rounded-br-md text-white text-sm md:text-base py-2 md:py-[11px] px-3 md:px-[27px] hover:cursor-pointer shadow-md'>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
