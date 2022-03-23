export interface DecisionOption {
  displayText: string;
  leadsTo: string;
  targetFrame?: number;
}

interface BaseNode {
  id: string;
  prompt?: string;
  options: DecisionOption[];
}

interface ImageNode extends BaseNode {
  imageSrc: string;
}

interface AnimationNode extends BaseNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
}

export type DecisionNode = ImageNode | AnimationNode;

export interface FinalNode {
  id: string;
  class: string;
}

export type DecisionTree = (DecisionNode | FinalNode)[];

export const isDecision = (node: DecisionNode | FinalNode): node is DecisionNode =>
  (node as DecisionNode).options !== undefined;

export const isAnimation = (node: DecisionNode): node is AnimationNode =>
  (node as AnimationNode).animationData !== undefined;