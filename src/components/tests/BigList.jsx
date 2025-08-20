import React, { useEffect, useMemo, useRef, useState } from "react";
import useRenderProfiler from "../hooks/useRenderProfiler";
import { useAppSelector } from "../store/store";

// Большой список, триггерим частые обновления данных
export default function BigList({ running }: { running: boolean }) {
  const { beginUpdate, endUpdate } = useRenderProfiler("BigList");
  const [items, setItems] = useState<number[]>(() =>
    Array.from({ length: 5000 }, (_, i) => i)
  );
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      if (tickRef.current) clearInterval(tickRef.current);
      return;
    }
    tickRef.current = window.setInterval(() => {
      // имитируем перерасчёт и частичный мутейшн
      beginUpdate();
      setItems((prev) => {
        const copy = prev.slice();
        for (let i = 0; i < 100; i++) {
          const idx = Math.floor(Math.random() * copy.length);
          copy[idx] = copy[idx] + 1;
        }
        return copy;
      });
      // завершение апдейта после коммита
      requestAnimationFrame(() => endUpdate());
    }, 120);

    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [running, beginUpdate, endUpdate]);

  const rendered = useMemo(
    () =>
      items.map((n, i) => (
        <div key={i} style={{ padding: 2, fontSize: 12 }}>
          #{i}: {n}
        </div>
      )),
    [items]
  );

  return <div style={{ height: 300, overflow: "auto" }}>{rendered}</div>;
}
