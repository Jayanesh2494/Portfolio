import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import './scramble-text.css';

gsap.registerPlugin(ScrambleTextPlugin);

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText = ({ text, className, delay = 0 }: ScrambleTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "none" }
    });

    const cursorTl = gsap.timeline({ repeat: -1 });

    cursorTl
      .to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "none",
        delay: 0.2
      })
      .to(cursorRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "none",
        delay: 0.2
      });

    tl.to(textRef.current, {
      scrambleText: {
        text: text,
        chars: "upperCase",
        speed: 0.3
      },
      duration: 1.5,
      delay: delay
    })
    .add(cursorTl);

    return () => {
      tl.kill();
      cursorTl.kill();
    };
  }, [text, delay]);

  return (
    <div className={`text-scramble__content ${className || ''}`}>
      <span ref={textRef} className="text-scramble__text"></span>
      <img 
        ref={cursorRef}
        className="text-scramble__cursor"
        src="https://assets.codepen.io/16327/scramble-cursor.png" 
        alt="" 
      />
    </div>
  );
};

export default ScrambleText; 