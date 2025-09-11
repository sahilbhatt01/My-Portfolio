'use client';

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
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

    const colors = ['#5533ff', '#aa33ff', '#33ddff', '#ff3399', '#ff77cc'];
    for (let i = 0; i < 20; i++) {
      drawNebula(
        Math.random() * size,
        Math.random() * size,
        Math.random() * 250 + 150,
        colors[Math.floor(Math.random() * colors.length)]
      );
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, []);

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[90, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} transparent opacity={0.45} />
    </mesh>
  );
}

/** ===== Shooting Stars ===== */
function ShootingStars() {
  const starsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push((Math.random() - 0.5) * 500); // x
      arr.push((Math.random() - 0.5) * 500); // y
      arr.push((Math.random() - 0.5) * 500); // z
    }
    return new Float32Array(arr);
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0005;
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.7} />
    </points>
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
        <Stars
          radius={250}
          depth={140}
          count={22000}
          factor={2}
          fade={false}
          speed={0.1}
          saturation={0}
        />
        <Nebula />
        <Sparkles count={500} scale={100} size={3} speed={0.4} color="#bbddff" />
        <ShootingStars />
      </Suspense>
    </Canvas>
  );
}
