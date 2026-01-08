'use client';

import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/assets/models/developer.glb');
  const { animations: idleAnimation } = useFBX('/assets/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/assets/animations/Agreeing.fbx');
  const { animations: clappingAnimation } = useFBX('/assets/animations/Standing Clap.fbx');
  const { animations: victoryAnimation } = useFBX('/assets/animations/Breakdance Uprock Var 2.fbx');

  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group,
  );

  useEffect(() => {
    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [animationName, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload('/assets/models/developer.glb');
useFBX.preload('/assets/animations/idle.fbx');
useFBX.preload('/assets/animations/Agreeing.fbx');
useFBX.preload('/assets/animations/Breakdance Uprock Var 2.fbx');
useFBX.preload('/assets/animations/Standing Clap.fbx');

export default Developer;