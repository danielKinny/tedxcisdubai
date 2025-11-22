"use client";
import { useRef, ReactNode, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [springs, api] = useSpring(() => ({
    y: 0,
    config: config.slow
  }));
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate scroll progress for this element
      // When element enters from bottom: progress = 0
      // When element exits from top: progress = 1
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + elementHeight);
      
      // Only apply parallax when element is in viewport
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const parallaxOffset = (scrollProgress - 0.5) * 200 * speed;
        api.start({ y: parallaxOffset });
      }
    };
    
    // Use requestAnimationFrame for smoother updates
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
    handleScroll(); // Initial calculation
    
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
    // Enable smooth scrolling
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
