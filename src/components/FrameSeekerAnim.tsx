import lottie, { AnimationItem } from 'lottie-web';
import React, { useEffect, useState } from 'react';
import playToFrame from '../utils/playToFrame';

export interface FrameSeekerAnimProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
  targetFrame: number;
  size: string;
}

const FrameSeekerAnim = (props: FrameSeekerAnimProps) => {
  const [anim, setAnim] = useState<AnimationItem>();
  let container: Element | null = null;

  useEffect(() => {
    if (!container) return;

    anim?.destroy();
    const animation = lottie.loadAnimation({
      container: container,
      animationData: props.animationData,
      loop: false,
      autoplay: false
    });

    setAnim(animation);
  }, [props.animationData, container]);

  useEffect(() => {
    if (!anim) return;
    
    anim.setSpeed(1);
    playToFrame(anim, props.targetFrame);
  }, [anim, props.targetFrame]);

  return (
    <div ref={el => (container = el)} style={{ width: props.size }} />
  );
};

export default FrameSeekerAnim;