'use client';

import { useGLTF, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DemoComputer = ({ texture, ...props }) => {
  const group = useRef();
  const { scene } = useGLTF('/assets/models/computer.glb');
  const txt = useTexture(texture || '/assets/project/project1.png');

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log('Mesh Name:', child.name);
        // Only target meshes with "screen" in the name, avoid "monitor" as it might be the whole object
        if (child.name.toLowerCase().includes('screen')) {
          child.material = new THREE.MeshBasicMaterial({ map: txt });
        }
      }
    });
  }, [scene, txt]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload('/assets/models/computer.glb');

export default DemoComputer;