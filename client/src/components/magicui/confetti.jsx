"use client";

import confetti from "canvas-confetti";
import confettiSound from "@/assets/Informative-pages/Banner-page/fireworks-sound.mp3";

const confettiAudio = new Audio(confettiSound);
confettiAudio.volume = 0.5;

export function ConfettiSideCannons({ children, onClick, ...props }) {
  const handleClick = (e) => {
    confettiAudio.play().catch((err) => console.log("Audio play failed:", err));
    setTimeout(() => {
      confettiAudio.pause();
    }, 8000);

    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    if (onClick) onClick(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
