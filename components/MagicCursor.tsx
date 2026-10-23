"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  color: string;
};

const sparkColors = ["#E11D48", "#FB7185", "#FECDD3", "#FFFFFF"];

export function MagicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = { x: 0, y: 0, visible: false };
    const sparks: Spark[] = [];
    let animationFrame = 0;
    let previousTime = 0;
    let lastSparkPoint: { x: number; y: number } | null = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#E11D48";

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (cursor.visible) scheduleDraw();
    };

    const addSpark = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.25 + Math.random() * 0.8;
      const color = Math.random() < 0.65 ? accent : sparkColors[Math.floor(Math.random() * sparkColors.length)];

      sparks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.25,
        radius: 1 + Math.random() * 2.1,
        life: 0.42 + Math.random() * 0.4,
        maxLife: 0.82,
        color,
      });

      if (sparks.length > 90) sparks.shift();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.visible = true;

      const distance = lastSparkPoint
        ? Math.hypot(cursor.x - lastSparkPoint.x, cursor.y - lastSparkPoint.y)
        : 10;

      if (distance >= 7) {
        addSpark(cursor.x, cursor.y);
        if (distance >= 22) addSpark(cursor.x, cursor.y);
        lastSparkPoint = { x: cursor.x, y: cursor.y };
      }
      scheduleDraw();
    };

    const handlePointerLeave = () => {
      cursor.visible = false;
      lastSparkPoint = null;
      scheduleDraw();
    };

    function scheduleDraw() {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(draw);
    }

    const draw = (time: number) => {
      animationFrame = 0;
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.04) : 0.016;
      previousTime = time;
      context.clearRect(0, 0, width, height);

      for (let index = sparks.length - 1; index >= 0; index -= 1) {
        const spark = sparks[index];
        spark.life -= delta;
        if (spark.life <= 0) {
          sparks.splice(index, 1);
          continue;
        }

        spark.x += spark.vx * 60 * delta;
        spark.y += spark.vy * 60 * delta;
        spark.vy += 0.018 * 60 * delta;

        const opacity = Math.min(spark.life / spark.maxLife, 1);
        context.globalAlpha = opacity;
        context.shadowColor = spark.color;
        context.shadowBlur = 12;
        context.fillStyle = spark.color;
        context.beginPath();
        context.arc(spark.x, spark.y, spark.radius * (0.65 + opacity * 0.35), 0, Math.PI * 2);
        context.fill();
      }

      if (cursor.visible) {
        const halo = context.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 27);
        halo.addColorStop(0, `${accent}66`);
        halo.addColorStop(0.38, `${accent}2b`);
        halo.addColorStop(1, `${accent}00`);
        context.globalAlpha = 1;
        context.shadowBlur = 0;
        context.fillStyle = halo;
        context.beginPath();
        context.arc(cursor.x, cursor.y, 27, 0, Math.PI * 2);
        context.fill();

        context.shadowColor = accent;
        context.shadowBlur = 11;
        context.fillStyle = "#FFF1F2";
        context.beginPath();
        context.arc(cursor.x, cursor.y, 3, 0, Math.PI * 2);
        context.fill();
      }

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      if (sparks.length > 0) scheduleDraw();
    };

    resizeCanvas();
    document.body.classList.add("magic-cursor-active");
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.body.classList.remove("magic-cursor-active");
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="magic-cursor-canvas" />;
}
