import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#667eea"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleRing() {
  const particlesRef = useRef();
  const particleCount = 50;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 3;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.sin(angle) * radius;
    positions[i * 3 + 2] = 0;
  }

  useFrame(({ clock }) => {
    particlesRef.current.rotation.z = clock.getElapsedTime() * 0.5;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#764ba2"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#764ba2" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#667eea" />
      <AnimatedSphere />
      <ParticleRing />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
