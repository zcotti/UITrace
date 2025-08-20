import React, { useEffect, useRef, useState } from "react";
import useRenderProfiler from "../hooks/useRenderProfiler";

const N = 1000;

export default function ChartComponent({ running }: { running: boolean }) {
  const { beginUpdate, endUpdate } = useRenderProfiler("ChartComponent");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [data, setData] = useState<number[]>(
    () => Array.from({ length: N }, () => Math.random())
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const draw = (arr: number[]) => {
      const { width, height } = ctx.canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "#10b981";
      ctx.beginPath();
      for (let i = 0; i < arr.length; i++) {
        const x = (i / (arr.length - 1)) * width;
        const y = height - arr[i] * height;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    draw(data);

    if (!running) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const loop = () => {
      beginUpdate();
      // обновляем часть точек
      setData((prev) => {
        const next = prev.slice();
        for (let k = 0; k < 50; k++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = Math.random();
        }
        return next;
      });
      requestAnimationFrame(() => {
        draw(data);
        endUpdate();
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running, data, beginUpdate, endUpdate]);

  return <canvas ref={canvasRef} width={600} height={200} />;
}
