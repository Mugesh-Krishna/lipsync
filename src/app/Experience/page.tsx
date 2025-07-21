// src/app/experience/page.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/Experience';

export default function ExperiencePage() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={['#ececec']} />
        <Experience/>
      </Canvas>
    </div>
  );
}
