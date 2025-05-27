import { useGLTF } from '@react-three/drei';

export function IceCreamTruck(props) {
  const { scene } = useGLTF('/icecream/icecream.gltf');
  return (
    <group position={[1.2, -0.5, 0]}>
      <primitive object={scene} {...props} />
    </group>
  );
}

useGLTF.preload('/icecream/icecream.gltf'); 