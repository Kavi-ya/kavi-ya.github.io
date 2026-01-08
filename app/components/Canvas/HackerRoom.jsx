'use client';

import { useGLTF, useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const HackerRoom = (props) => {
  // Placeholder until you have the actual model
  const { nodes, materials } = useGLTF('/assets/models/hacker-room.glb');
  const monitorTexture = useTexture('/assets/project/project2.png');
  monitorTexture.flipY = false;

  const groupRef = useRef();



  return (
    <group {...props} dispose={null} ref={groupRef}>
      <primitive object={nodes.screen_screens_0}>
        <meshBasicMaterial map={monitorTexture} />
      </primitive>
      <primitive object={nodes.screen_glass_glass_0} />
      <primitive object={nodes.table_table_mat_0_1} />
      <primitive object={nodes.table_table_mat_0_2} />
      <primitive object={nodes.table_table_mat_0_3} />
      <primitive object={nodes.table_table_mat_0_4} />
      <primitive object={nodes.table_table_mat_0_5} />
      <primitive object={nodes.table_table_mat_0_6} />
      <primitive object={nodes.table_table_mat_0_7} />
      <primitive object={nodes.table_table_mat_0_8} />
      <primitive object={nodes.table_table_mat_0_9} />
      <primitive object={nodes.table_table_mat_0_10} />
      <primitive object={nodes.table_table_mat_0_11} />
      <primitive object={nodes.table_table_mat_0_12} />
    </group>
  );
};

useGLTF.preload('/assets/models/hacker-room.glb');

export default HackerRoom;