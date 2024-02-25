// Dental tools orbiting the tooth in 3D
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DentalMirror({ angle, radius }: { angle: number; radius: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      const a = angle + t * 0.5;
      ref.current.position.x = Math.cos(a) * radius;
      ref.current.position.z = Math.sin(a) * radius;
      ref.current.position.y = Math.sin(t * 0.3 + angle) * 0.3;
      ref.current.rotation.y = -a;
    }
  });
  return (
    <group ref={ref}>
      {/* Handle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
        <meshStandardMaterial color="#c0c8d8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Mirror head */}
      <mesh position={[0, 0, 0.5]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#e8f0ff" metalness={1} roughness={0} envMapIntensity={2} />
      </mesh>
    </group>
  );
}

function DentalScaler({ angle, radius }: { angle: number; radius: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      const a = angle + t * 0.4;
      ref.current.position.x = Math.cos(a) * radius;
      ref.current.position.z = Math.sin(a) * radius;
      ref.current.position.y = Math.sin(t * 0.4 + angle) * 0.4;
      ref.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }
  });
  return (
    <group ref={ref} rotation={[0.3, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.04, 0.025, 1.2, 8]} />
        <meshStandardMaterial color="#b8c4d8" metalness={0.85} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.65, 0]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.01, 0.4, 6]} />
        <meshStandardMaterial color="#d0dce8" metalness={1} roughness={0.05} />
      </mesh>
    </group>
  );
}

function FloatingGem({ angle, radius, color }: { angle: number; radius: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      const a = angle + t * 0.3;
      ref.current.position.x = Math.cos(a) * radius;
      ref.current.position.z = Math.sin(a) * radius;
      ref.current.position.y = Math.sin(t * 0.7 + angle) * 0.5;
      ref.current.rotation.y = t * 1.5;
      ref.current.rotation.x = t * 0.8;
    }
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.05} emissive={color} emissiveIntensity={0.15} transparent opacity={0.85} />
    </mesh>
  );
}

export default function OrbitingTools() {
  return (
    <group>
      <DentalMirror angle={0} radius={2.2} />
      <DentalMirror angle={Math.PI} radius={2.4} />
      <DentalScaler angle={Math.PI / 2} radius={2.0} />
      <DentalScaler angle={(3 * Math.PI) / 2} radius={2.3} />
      <FloatingGem angle={Math.PI / 4} radius={1.8} color="#0e9aa7" />
      <FloatingGem angle={(5 * Math.PI) / 4} radius={1.9} color="#14b8a6" />
      <FloatingGem angle={(3 * Math.PI) / 4} radius={2.1} color="#3ec1cb" />
    </group>
  );
}
