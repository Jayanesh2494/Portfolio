import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const SkillModel = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial color="#915EFF" attach="material" distort={0.5} speed={2} />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default SkillModel; 