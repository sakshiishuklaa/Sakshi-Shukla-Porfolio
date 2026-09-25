import { useEffect, useRef } from 'react';
import { useSite } from '../context/SiteContext';

function sphere(count, radius, color, size) {
  const points = [];
  for (let index = 0; index < count; index += 1) {
    let x = 0;
    let y = 0;
    let z = 0;
    let length = 0;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      length = Math.hypot(x, y, z);
    } while (length === 0 || length > 1);
    const distance = Math.cbrt(Math.random()) * radius;
    points.push({
      x: (x / length) * distance,
      y: (y / length) * distance,
      z: (z / length) * distance,
      color,
      size
    });
  }
  return points;
}

export default function Starfield() {
  const canvasRef = useRef(null);
  const { theme } = useSite();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    const pointer = { x: 0, y: 0 };
    const layers = theme === 'dark'
      ? [
          ...sphere(1400, 1.5, '#fafafa', 1.15),
          ...sphere(280, 1.5, '#a5b4fc', 1.7)
        ]
      : [
          ...sphere(1100, 1.5, '#8b5cf6', 1.15),
          ...sphere(220, 1.5, '#6d28d9', 1.7)
        ];

    let rotX = 0;
    let rotY = 0;
    let frame = 0;
    let last = performance.now();
    const tilt = Math.PI / 4;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    const onMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const draw = (now) => {
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      rotX -= delta / 10;
      rotY -= delta / 15;
      rotX += 0.001 * pointer.x;
      rotY += 0.001 * pointer.y;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
      }
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const fov = (75 * Math.PI) / 180;
      const focal = 1 / Math.tan(fov / 2);
      const aspect = width / Math.max(height, 1);

      layers.forEach((point) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;
        const y1 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const x2 = x1 * cosT - y1 * sinT;
        const y2 = x1 * sinT + y1 * cosT;
        const depth = 1 - z2;
        if (depth < 0.12) return;
        const ndcX = (x2 * focal) / (depth * aspect);
        const ndcY = (y2 * focal) / depth;
        if (ndcX < -1.2 || ndcX > 1.2 || ndcY < -1.2 || ndcY > 1.2) return;
        const sx = (ndcX * 0.5 + 0.5) * width;
        const sy = (1 - (ndcY * 0.5 + 0.5)) * height;
        context.globalAlpha = Math.min(0.9, 0.25 + (1.2 - depth) * 0.45);
        context.fillStyle = point.color;
        context.beginPath();
        context.arc(sx, sy, point.size, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener('pointermove', onMove);
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
