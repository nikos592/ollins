'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export default function TypewriterText({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000 
}: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isTypingComplete) return;

    const fullText = texts[0]; // Берем только первый текст
    
    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Текст напечатан полностью
      setIsTypingComplete(true);
    }
  }, [currentText, texts, speed, isTypingComplete]);

  return (
    <div className="font-vertino">
      <span className="text-gray-800 leading-relaxed text-2xl font-bold">
        {currentText}
      </span>
      {!isTypingComplete && <span className="animate-pulse text-gray-800 text-2xl">|</span>}
    </div>
  );
}
