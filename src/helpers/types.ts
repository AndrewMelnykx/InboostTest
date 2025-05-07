import { Edge, Node } from "@xyflow/react";

type FlowProps = {
  nodes: Node[];
  edges: Edge[];
};

interface CustomNodeData extends Node<Record<string, unknown>, string> {
  data: {
    label: string;
  };
  position: { x: number; y: number };
}

export type { FlowProps, CustomNodeData };
