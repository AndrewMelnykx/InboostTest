import { Edge, Node } from "@xyflow/react";

type NodeType = "default" | "textUpdater" | "group" | "parent";

interface FlowEdge extends Edge {
  source: string;
  target: string;
  style?: React.CSSProperties;
  animated?: boolean;
}

interface FlowNode extends Node {
  id: string;
  type?: NodeType;
  position: { x: number; y: number };
  data: {
    label: string;
    status?: boolean;
    parentId?: string;
  };
}

interface FlowState {
  flowNodes: FlowNode[];
  flowEdges: Edge[];
  filteredNodes: Node[];
  selectedNodeId: string;
}

type FlowElement = Node | Edge;

interface NodeFlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
}

export type {
  NodeType,
  FlowNode,
  FlowState,
  FlowEdge,
  FlowElement,
  NodeFlowCanvasProps,
};
