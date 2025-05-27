import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center, PresentationControls, MeshReflectorMaterial } from '@react-three/drei';
import { IceCreamTruck } from '../IceCreamTruck';
import AboutPopup from '../AboutPopup';
import ProjectsPopup from '../ProjectsPopup';

export default function IceCreamTruckCanvas() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <button
        onClick={() => setIsAboutOpen(true)}
        className="absolute top-4 right-4 z-10 bg-[#1a1a4f] text-white px-4 py-2 rounded-lg hover:bg-[#2a2a6f] transition-colors"
      >
        About
      </button>
      <AboutPopup isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ProjectsPopup isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [6, 0.1, 8]
        }}
        style={{
          background: 'transparent'
        }}
      >
        <fog attach="fog" args={['#0a0a12', 12, 15]} />
        <Suspense fallback={null}>
          <color attach="background" args={['#050816']} />
          
          <ambientLight intensity={0.05} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.4}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <spotLight
            position={[-10, 10, -5]}
            angle={0.3}
            penumbra={1}
            intensity={0.08}
            castShadow
          />
          
          <OrbitControls enableZoom={true} maxDistance={8.6} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} target={[0,0,0]} />
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[0, 0]}
            azimuth={[-Math.PI, Math.PI]}
            config={{ mass: 0.5, tension: 100 }}
            zoom={true}
          >
            <group>
              <Center>
                <IceCreamTruck 
                  scale={0.7}
                  onAboutClick={() => setIsAboutOpen(true)}
                  onResumeClick={() => window.open('/Resume_TiyaVerma.pdf', '_blank')}
                  onProjectsClick={() => setIsProjectsOpen(true)}
                  onContactClick={() => alert('Contact clicked!')}
                />
              </Center>
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, -11.75]} receiveShadow>
                <circleGeometry args={[25, 75]} />
                <MeshReflectorMaterial
                  color="#23243a"
                  metalness={0.4}
                  roughness={0.6}
                  blur={[1000, 500]}
                  mixBlur={6}
                  mixStrength={5}
                  resolution={1024}
                  mirror={0.5}
                  depthScale={1.2}
                  minDepthThreshold={0.4}
                  maxDepthThreshold={1.25}
                  emissive="#181a22"
                  emissiveIntensity={0.05}
                />
              </mesh>
              {/* Clickable areas for signpost labels */}
              {/* About */}
              <mesh position={[-1.55, 0.89, 1]} scale={[1, 0.25, 0.2]} onClick={() => setIsAboutOpen(true)} rotation={[0, 19.75, 0]}>
                <boxGeometry args={[1, 1, 0.5]} />
                <meshBasicMaterial transparent opacity={0}
                 color="#1a1a4f"
                 />
              </mesh>
              {/* Resume */}
              <mesh position={[-1.67, 0.58, 1]} scale={[0.75, 0.2, 0.2]} onClick={() => window.open('/Resume_TiyaVerma.pdf', '_blank')} rotation={[0, 19.1, 0]}>
                <boxGeometry args={[1, 1, 0.5]} />
                <meshBasicMaterial transparent opacity={0} color="#e3f0fa" />
              </mesh>
              {/* Projects */}
              <mesh position={[-1.62, 0.25, 1]} scale={[1, 0.25, 0.2]} onClick={() => setIsProjectsOpen(true)} rotation={[0, 19.3, 0]}>
                <boxGeometry args={[1, 1, 0.5]} />
                <meshBasicMaterial transparent opacity={0} 
                color="#1a1a4f" />
              </mesh>
              {/* Contact */}
              <mesh position={[-1.62, -0.05, 1]} scale={[0.75, 0.2, 0.2]} onClick={() => window.open('mailto:tiyaverma2004@yahoo.in', '_blank')} rotation={[0, 19.67, 0]}>
                <boxGeometry args={[1, 1, 0.5]} />
                <meshBasicMaterial transparent opacity={0} 
                color="#1a1a4f" />
              </mesh>
            </group>
          </PresentationControls>
          
          <Environment preset="sunset" />

          <spotLight
            position={[-4, 3, 0]}
            angle={60}
            penumbra={1}
            intensity={15000}
            color="#1a1a4f"
            castShadow
          />
          <spotLight
            position={[0, 0, 0]}
            angle={0.1}
            penumbra={1}
            intensity={1000}
            color="#6a2a6f"
            castShadow
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 