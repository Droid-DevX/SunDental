// 3D Tooth model built with Three.js geometry
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function ToothModel({ scale = 1 }: { scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const crownRef = useRef<THREE.Mesh>(null);
  const root1Ref = useRef<THREE.Mesh>(null);
  const root2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Crown (top of tooth) */}
      <mesh ref={crownRef} position={[0, 0.5, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial
          color="#f0f8ff"
          distort={0.08}
          speed={2}
          roughness={0.1}
          metalness={0.2}
          emissive="#b0e8ff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Crown bumps (cusps) */}
      {[[-0.3, 1.1, 0], [0.3, 1.1, 0], [0, 1.1, 0.3], [0, 1.1, -0.3]].map(([x, y, z], i) => (
        <mesh key={i} position={[x as number, y as number, z as number]} castShadow>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#e8f4ff" roughness={0.15} metalness={0.1} />
        </mesh>
      ))}

      {/* Neck */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.45, 0.38, 0.5, 32]} />
        <meshStandardMaterial color="#d0e8f0" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Root 1 */}
      <mesh ref={root1Ref} position={[-0.22, -0.85, 0]} rotation={[0, 0, 0.15]}>
        <coneGeometry args={[0.22, 0.9, 16]} />
        <meshStandardMaterial color="#c5dce8" roughness={0.3} metalness={0.05} />
      </mesh>

      {/* Root 2 */}
      <mesh ref={root2Ref} position={[0.22, -0.85, 0]} rotation={[0, 0, -0.15]}>
        <coneGeometry args={[0.22, 0.9, 16]} />
        <meshStandardMaterial color="#c5dce8" roughness={0.3} metalness={0.05} />
      </mesh>

      {/* Shine overlay */}
      <mesh position={[0.15, 0.65, 0.55]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="white" roughness={0} metalness={0.8} emissive="white" emissiveIntensity={0.3} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}
