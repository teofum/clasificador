import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { DecisionNode, isAnimation } from '../utils/DecisionTree';
import FrameSeekerAnim from './FrameSeekerAnim';

import './DecisionCard.css';

export interface DecisionCardProps {
  node: DecisionNode;
  set: (id: string) => void;
}

const DecisionCard = (props: DecisionCardProps) => {
  const [target, setTarget] = useState(0);

  const select = (e: Event, next: string) => {
    (e.target as HTMLElement).classList.add('clicked');
    setTimeout(() => props.set(next), 100);
  };

  const decisionButtons = props.node.options
    .map((option, i, arr) => {
      // Set a default target frame unless a target frame for the option is specified
      let targetFrame: number;

      // Assume a 30 frame (500ms) animation, for a different animation length targets
      // should be specified for each option.
      // TODO: find a way to get the actual length of the animation, use that instead
      if (option.targetFrame === undefined)
        targetFrame = 30 / (arr.length - 1) * i;
      else targetFrame = option.targetFrame;

      return (
        <button
          key={i}
          onMouseOver={() => setTarget(targetFrame)}
          onClick={(e) => select(e.nativeEvent, option.leadsTo)} >
          {option.displayText}
        </button>
      );
    });

  return (
    <TransitionGroup className='dcard-transition-group'>
      {[props.node].map(node => // hack to trigger the transition
        <CSSTransition key={node.id} classNames='card' timeout={500}>
          <div className='dcard-root'>
            <div className='dcard-anim'>
              {isAnimation(node) &&
                <FrameSeekerAnim
                  targetFrame={target}
                  size='100%'
                  animationData={node.animationData} />}
              {props.node.prompt &&
                <p className='dcard-prompt'>{node.prompt}</p>}
            </div>
            <div className='dcard-buttons'>
              {decisionButtons}
            </div>
          </div>
        </CSSTransition>)}
    </TransitionGroup>
  );
};

export default DecisionCard;