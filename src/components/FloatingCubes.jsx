import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function FloatingCube({ position, color, speed }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </Box>
  );
}

export default function FloatingCubes() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <FloatingCube position={[-1, 1, 0]} color="#667eea" speed={1} />
      <FloatingCube position={[1, -0.5, 0]} color="#764ba2" speed={0.8} />
      <FloatingCube position={[0, 0.5, -1]} color="#f093fb" speed={1.2} />
    </Canvas>
  );
}
