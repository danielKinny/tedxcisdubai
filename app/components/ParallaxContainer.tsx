"use client";
import { useRef, ReactNode, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  offset?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.5, offset = 0, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [springs, api] = useSpring(() => ({
    y: 0,
    config: config.slow
  }));
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxOffset = scrollY * (speed - 1);
      api.start({ y: parallaxOffset });
    };
    
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [api, speed]);
  
  return (
    <animated.div
      ref={ref}
      className={className}
      style={{ 
        y: springs.y,
        willChange: 'transform'
      }}
    >
      {children}
    </animated.div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxContainer({ children, className = "" }: ParallaxContainerProps) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className={`relative ${className}`} style={{ scrollBehavior: 'smooth' }}>
      {children}
    </div>
  );
}
