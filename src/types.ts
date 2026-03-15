export interface Decision {
  label: string;
  nextNodeId: string;
  timeAppear: number; // seconds into the video when this decision appears
  gifSrc?: string; // optional animated GIF URL for the decision button
}

export interface StoryNode {
  id: string;
  videoSrc: string;
  title: string;
  decisions?: Decision[];
}

export interface StoryGraph {
  startNodeId: string;
  nodes: Record<string, StoryNode>;
}

export interface HistoryEntry {
  nodeId: string;
  decisionLabel: string;
}
