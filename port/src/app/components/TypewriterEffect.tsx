'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function TypewriterEffect({
  words,
  className = '',
  typeSpeed = 150,
  deleteSpeed = 75,
  delayBetweenWords = 2000,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Safety check for empty words array
    if (!words || words.length === 0) return;
    
    const currentWord = words[currentWordIndex] || '';

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && currentText.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && currentText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && currentText.length === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 200);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  // Safety check for empty words array
  if (!words || words.length === 0) {
    return <span className={className}>Developer</span>;
  }

  return (
    <span className={className}>
      {currentText}
      <span className="border-r-2 border-current ml-1">|</span>
    </span>
  );
}
