'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Sparkles } from '@react-three/drei';

export default function GardenScene() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Sky sunPosition={[100, 20, 100]} />
      <Sparkles count={100} scale={10} size={2} speed={0.4} color="lightgreen" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}