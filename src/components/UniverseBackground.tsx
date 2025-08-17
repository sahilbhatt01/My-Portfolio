'use client';

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/** ===== Nebula Background ===== */
function Nebula() {
  const mesh = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, size, size);

    const drawNebula = (x: number, y: number, r: number, color: string) => {
      const grad = ctx.createRadialGradient(x, y, r * 0.1, x, y, r);
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const colors = ['#5533ff', '#aa33ff', '#33ddff', '#ff3399'];
    for (let i = 0; i < 20; i++) {
      drawNebula(
        Math.random() * size,
        Math.random() * size,
        Math.random() * 250 + 150,
        colors[(Math.random() * colors.length) | 0]
      );
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, []);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[90, 64, 64]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

/** ===== Planet ===== */
function Planet({ position = [6, -1, -10] as [number, number, number], radius = 2.4 }) {
  const planetRef = useRef<THREE.Mesh>(null);

  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    const oceanGradient = ctx.createLinearGradient(0, 0, size, size);
    oceanGradient.addColorStop(0, '#0B3D91');
    oceanGradient.addColorStop(1, '#0F5BA7');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, size, size);

    const drawBlob = (x: number, y: number, r: number, color: string, alpha = 0.28) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      const grad = ctx.createRadialGradient(x, y, r * 0.2, x, y, r);
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const colors = ['#2E8B57', '#3E9B4F', '#5C8A3C', '#7C6E3C'];
    for (let i = 0; i < 28; i++) {
      drawBlob(Math.random() * size, Math.random() * size, (Math.random() * 0.12 + 0.06) * size, colors[(Math.random() * colors.length) | 0]);
    }

    for (let i = 0; i < 14; i++) {
      drawBlob(Math.random() * size, Math.random() * size, (Math.random() * 0.1 + 0.05) * size, '#E6F6FF', 0.18);
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((_, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group position={position}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[radius, 96, 96]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.6}
          metalness={0.2}
          toneMapped={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[radius * 1.05, 96, 96]} />
        <meshBasicMaterial
          color="#00ccff"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

/** ===== Main Universe Canvas Component ===== */
export default function UniverseBackground() {
  return (
    <Canvas camera={{ position: [0, 2, 15], fov: 60 }}>
      <color attach="background" args={['#000']} />

      {/* Lights */}
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
      <pointLight position={[-5, -5, -5]} intensity={1.2} color="#ff00ff" />

      <Suspense fallback={null}>
        <Stars radius={250} depth={140} count={22000} factor={2} fade={false} speed={0.1} saturation={0} />
        <Nebula />
        <Sparkles count={500} scale={100} size={3} speed={0.4} color="#bbddff" />
        <Planet />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.15} />
    </Canvas>
  );
}
