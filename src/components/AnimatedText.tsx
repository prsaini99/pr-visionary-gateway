
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  once = true,
  tag = 'span',
  direction = 'up',
  threshold = 0.1,
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = elementRef.current;
    
    if (!current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              let animationClass = '';
              switch(direction) {
                case 'up':
                  animationClass = 'animate-fade-in-up';
                  break;
                case 'down':
                  animationClass = 'animate-fade-in';
                  break;
                case 'left':
                  animationClass = 'animate-fade-in-left';
                  break;
                case 'right':
                  animationClass = 'animate-fade-in-right';
                  break;
                default:
                  animationClass = 'animate-fade-in-up';
              }
              entry.target.classList.add(animationClass);
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('animate-fade-in', 'animate-fade-in-up', 'animate-fade-in-left', 'animate-fade-in-right');
          }
        });
      },
      { threshold }
    );
    
    observer.observe(current);
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay, once, direction, threshold]);

  const Tag = tag;
  
  return React.createElement(
    Tag,
    {
      ref: elementRef,
      className: cn('opacity-0', className),
    },
    text
  );
};

export default AnimatedText;
