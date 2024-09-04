'use client';

import React, { useState, useEffect } from 'react';
import './globals.css';
import axios from 'axios';
import Lightbulb from '@/components/Lightbulb';
import Chat from '@/components/Chat';

const Home: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    const fetchLightStatus = async () => {
      try {
        const response = await axios.get('/api/lightbulb');
        setIsLightOn(response.data.status);
      } catch (error) {
        console.error('Error fetching light status:', error);
      }
    };
    fetchLightStatus();
  }, []);

  const toggleLight = async (newStatus: boolean) => {
    setIsLightOn(newStatus);
    try {
      await axios.post('/api/lightbulb', { status: newStatus, useAI: false, message: '' });
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-normal px-2">
      <h1 className="text-2xl font-bold my-4">ChatBulb App</h1>
      <Lightbulb isOn={isLightOn} toggleLight={() => toggleLight(!isLightOn)} />
      <Chat isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  );
};

export default Home;
