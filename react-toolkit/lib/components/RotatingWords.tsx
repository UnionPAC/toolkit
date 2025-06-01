import React, { useEffect, useState, useRef } from 'react';

interface RotatingWordsProps {
  words: string[];
  staticTextBefore?: string;
  staticTextAfter?: string;
  interval?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  beforeClass?: string;
  afterClass?: string;
  wordClass?: string;
  wordStyle?: React.CSSProperties;
  beforeSlot?: React.ReactNode;
  afterSlot?: React.ReactNode;
}

export const RotatingWords: React.FC<RotatingWordsProps> = ({
  words,
  staticTextBefore = '',
  staticTextAfter = '',
  interval = 2000,
  animation = 'slide-up',
  wrapperClass = '',
  wrapperStyle = {},
  beforeClass = '',
  afterClass = '',
  wordClass = '',
  wordStyle = {},
  beforeSlot,
  afterSlot
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!staticTextBefore && !beforeSlot) {
      console.warn('[TextSwitcher]: No staticTextBefore or beforeSlot provided.');
    }

    if (!staticTextAfter && !afterSlot) {
      console.warn('[TextSwitcher]: No staticTextAfter or afterSlot provided.');
    }

    intervalRef.current = window.setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [interval, words.length, staticTextBefore, staticTextAfter, beforeSlot, afterSlot]);

  const getAnimationStyles = () => {
    const baseStyle = {
      transition: 'all 0.3s ease-in-out',
      opacity: isVisible ? 1 : 0,
      display: 'inline-block',
      ...wordStyle
    };

    switch (animation) {
      case 'fade':
        return baseStyle;
      case 'slide-up':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        };
      case 'slide-down':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
        };
      case 'slide-left':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
        };
      case 'slide-right':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
        };
      default:
        return baseStyle;
    }
  };

  return (
    <span className={wrapperClass} style={wrapperStyle}>
      {beforeSlot || (
        <span className={beforeClass}>
          {staticTextBefore}&nbsp;
        </span>
      )}

      <span
        className={`text-color-purple ${wordClass}`}
        style={getAnimationStyles()}
      >
        {words[currentIndex]}
      </span>

      {afterSlot || (
        <span className={afterClass}>
          &nbsp;{staticTextAfter}
        </span>
      )}
    </span>
  );
};
