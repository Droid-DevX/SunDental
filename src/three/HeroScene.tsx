// Main 3D hero scene combining tooth + tools + particles
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ToothModel from './ToothModel';
import OrbitingTools from './OrbitingTools';
import ParticleField from './ParticleField';

function SceneContent() {
  return (
    <>
      {/* Lighting - brighter for light theme */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" castShadow />
      <pointLight position={[-5, 3, -5]} intensity={0.7} color="#0e9aa7" />
      <pointLight position={[5, -3, 5]} intensity={0.5} color="#14b8a6" />
      <spotLight position={[0, 8, 0]} angle={0.5} penumbra={0.5} intensity={1.5} color="#ffffff" castShadow />

      {/* Environment */}
      <Environment preset="apartment" />

      {/* Main tooth */}
      <Suspense fallback={null}>
        <ToothModel scale={1.2} />
      </Suspense>

      {/* Orbiting tools */}
      <OrbitingTools />

      {/* Background particles */}
      <ParticleField count={80} />

      {/* Limited orbit controls - mouse drag */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
        autoRotate={false}
        makeDefault
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      performance={{ min: 0.5 }}
    >
      <SceneContent />
    </Canvas>
  );
}
