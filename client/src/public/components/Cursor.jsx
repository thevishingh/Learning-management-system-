// 'use client';
// import { useState, useEffect, useRef } from 'react';
// export default function SmoothFollower() {
//   const mousePosition = useRef({ x: 0, y: 0 });
//   const dotPosition = useRef({ x: 0, y: 0 });
//   const borderDotPosition = useRef({ x: 0, y: 0 });
//   const [renderPos, setRenderPos] = useState({
//     dot: { x: 0, y: 0 },
//     border: { x: 0, y: 0 },
//   });
//   const [isHovering, setIsHovering] = useState(false);
//   const DOT_SMOOTHNESS = 0.2;
//   const BORDER_DOT_SMOOTHNESS = 0.1;
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePosition.current = { x: e.clientX, y: e.clientY };
//     };
//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);
//     window.addEventListener('mousemove', handleMouseMove);
//     const interactiveElements = document.querySelectorAll(
//       'a, button, img, input, textarea, select'
//     );
//     interactiveElements.forEach((element) => {
//       element.addEventListener('mouseenter', handleMouseEnter);
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });
//     const animate = () => {
//       const lerp = (start, end, factor) => {
//         return start + (end - start) * factor;
//       };
//       dotPosition.current.x = lerp(
//         dotPosition.current.x,
//         mousePosition.current.x,
//         DOT_SMOOTHNESS
//       );
//       dotPosition.current.y = lerp(
//         dotPosition.current.y,
//         mousePosition.current.y,
//         DOT_SMOOTHNESS
//       );
//       borderDotPosition.current.x = lerp(
//         borderDotPosition.current.x,
//         mousePosition.current.x,
//         BORDER_DOT_SMOOTHNESS
//       );
//       borderDotPosition.current.y = lerp(
//         borderDotPosition.current.y,
//         mousePosition.current.y,
//         BORDER_DOT_SMOOTHNESS
//       );
//       setRenderPos({
//         dot: { x: dotPosition.current.x, y: dotPosition.current.y },
//         border: {
//           x: borderDotPosition.current.x,
//           y: borderDotPosition.current.y,
//         },
//       });
//       requestAnimationFrame(animate);
//     };
//     const animationId = requestAnimationFrame(animate);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       interactiveElements.forEach((element) => {
//         element.removeEventListener('mouseenter', handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//       cancelAnimationFrame(animationId);
//     };
//   }, []);
//   if (typeof window === 'undefined') return null;
//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       <div
//         className="absolute rounded-full dark:bg-white bg-black "
//         style={{
//           width: '8px',
//           height: '8px',
//           transform: 'translate(-50%, -50%)',
//           left: `${renderPos.dot.x}px`,
//           top: `${renderPos.dot.y}px`,
//         }}
//       />

//       <div
//         className="absolute rounded-full border dark:border-white border-black "
//         style={{
//           width: isHovering ? '44px' : '28px',
//           height: isHovering ? '44px' : '28px',
//           transform: 'translate(-50%, -50%)',
//           left: `${renderPos.border.x}px`,
//           top: `${renderPos.border.y}px`,
//           transition: 'width 0.3s, height 0.3s',
//         }}
//       />
//     </div>
//   );
// }


'use client';
import { useEffect, useRef } from 'react';
const RainbowCursor = ({
  element,
  length = 20,
  colors = ['#FE0000', '#FD8C00', '#FFE500', '#119F0B', '#0644B3', '#C22EDC'],
  size = 3,
  trailSpeed = 0.4,
  colorCycleSpeed = 0.002,
  blur = 0,
  pulseSpeed = 0.01,
  pulseMin = 0.8,
  pulseMax = 1.2,
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(undefined);
  const cursorsInittedRef = useRef(false);
  const timeRef = useRef(0);
  class Particle {
    position;
    constructor(x, y) {
      this.position = { x, y };
    }
  }
  const interpolateColors = (color1, color2, factor) => {
    const r1 = parseInt(color1.substr(1, 2), 16);
    const g1 = parseInt(color1.substr(3, 2), 16);
    const b1 = parseInt(color1.substr(5, 2), 16);
    const r2 = parseInt(color2.substr(1, 2), 16);
    const g2 = parseInt(color2.substr(3, 2), 16);
    const b2 = parseInt(color2.substr(5, 2), 16);
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  };
  const getPulseSize = (baseSize, time) => {
    const pulse = Math.sin(time * pulseSpeed);
    const scaleFactor = pulseMin + ((pulse + 1) * (pulseMax - pulseMin)) / 2;
    return baseSize * scaleFactor;
  };
  useEffect(() => {
    const hasWrapperEl = element !== undefined;
    const targetElement = hasWrapperEl ? element : document.body;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    if (prefersReducedMotion.matches) {
      console.log('Reduced motion is enabled - cursor animation disabled');
      return;
    }
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;
    canvasRef.current = canvas;
    contextRef.current = context;
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.position = hasWrapperEl ? 'absolute' : 'fixed';
    if (hasWrapperEl) {
      element?.appendChild(canvas);
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      document.body.appendChild(canvas);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    const onMouseMove = (e) => {
      if (hasWrapperEl && element) {
        const boundingRect = element.getBoundingClientRect();
        cursorRef.current.x = e.clientX - boundingRect.left;
        cursorRef.current.y = e.clientY - boundingRect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }
      if (!cursorsInittedRef.current) {
        cursorsInittedRef.current = true;
        for (let i = 0; i < length; i++) {
          particlesRef.current.push(
            new Particle(cursorRef.current.x, cursorRef.current.y)
          );
        }
      }
    };
    const onWindowResize = () => {
      if (hasWrapperEl && element) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    const updateParticles = () => {
      if (!contextRef.current || !canvasRef.current) return;
      const ctx = contextRef.current;
      const canvas = canvasRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineJoin = 'round';
      if (blur > 0) {
        ctx.filter = `blur(${blur}px)`;
      }
      const particleSets = [];
      let x = cursorRef.current.x;
      let y = cursorRef.current.y;
      particlesRef.current.forEach((particle, index) => {
        const nextParticle =
          particlesRef.current[index + 1] || particlesRef.current[0];
        particle.position.x = x;
        particle.position.y = y;
        particleSets.push({ x, y });
        x += (nextParticle.position.x - particle.position.x) * trailSpeed;
        y += (nextParticle.position.y - particle.position.y) * trailSpeed;
      });
      timeRef.current += colorCycleSpeed;
      const colorOffset = timeRef.current % 1;
      const currentSize = getPulseSize(size, timeRef.current);
      colors.forEach((color, index) => {
        const nextColor = colors[(index + 1) % colors.length];
        ctx.beginPath();
        ctx.strokeStyle = interpolateColors(
          color,
          nextColor,
          (index + colorOffset) / colors.length
        );
        if (particleSets.length) {
          ctx.moveTo(
            particleSets[0].x,
            particleSets[0].y + index * (currentSize - 1)
          );
        }
        particleSets.forEach((set, particleIndex) => {
          if (particleIndex !== 0) {
            ctx.lineTo(set.x, set.y + index * currentSize);
          }
        });
        ctx.lineWidth = currentSize;
        ctx.lineCap = 'round';
        ctx.stroke();
      });
    };
    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    targetElement.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
    loop();
    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      targetElement.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [
    element,
    length,
    colors,
    size,
    trailSpeed,
    colorCycleSpeed,
    blur,
    pulseSpeed,
    pulseMin,
    pulseMax,
  ]);
  return null;
};
export default RainbowCursor;
