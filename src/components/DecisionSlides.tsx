import React, { useEffect, useState } from 'react';
import testTree from '../assets/decision/testTree';
import { DecisionNode, FinalNode, DecisionTree, isDecision } from '../utils/DecisionTree';
import DecisionCard from './DecisionCard';

function DecisionSlides() {
  const [lastNode, setLastNode] = useState<DecisionNode | FinalNode>();
  const [activeNode, setActiveNode] = useState<DecisionNode | FinalNode>();
  const [tree, setTree] = useState<DecisionTree>([]);

  useEffect(() => {
    const newTree = testTree;

    // Validate new tree
    // TODO

    setTree(newTree);
  }, []);

  useEffect(() => {
    setActiveNode(tree[0]);
  }, [tree]);

  const setActiveById = (id: string): void => {
    const next = tree.find(node => node.id === id);
    if (next) {
      setLastNode(activeNode);
      setActiveNode(next);
    } else console.error(`setActiveById: node with ID ${id} does not exist.`);
  };

  console.log(activeNode?.id);
  return (
    <div className='slides-root'>
      {activeNode && isDecision(activeNode) &&
        <DecisionCard node={activeNode} set={setActiveById} />
      }
    </div>
  );
}

export default DecisionSlides;