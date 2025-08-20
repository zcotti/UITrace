import React, { useEffect, useRef, useState } from "react";
import useRenderProfiler from "../hooks/useRenderProfiler";

export default function AnimatedBox({ running }: { running: boolean }) {
  const { beginUpdate, endUpdate } = useRenderProfiler("AnimatedBox");
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const loop = () => {
      beginUpdate();
      setT((v) => v + 0.05);
      requestAnimationFrame(() => endUpdate());
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running, beginUpdate, endUpdate]);

  const x = 100 + Math.cos(t) * 80;
  const y = 60 + Math.sin(t) * 40;

  return (
    <div style={{ position: "relative", height: 150 }}>
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: 40,
          height: 40,
          background: "#8b5cf6",
          borderRadius: 8,
          transition: "transform 0s", // без CSS-анимации, чисто React апдейты
        }}
      />
    </div>
  );
}
