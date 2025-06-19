
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Scene3D() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}
