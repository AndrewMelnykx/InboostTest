import { Edge, Node } from "@xyflow/react";

type FlowProps = {
  nodes: Node[];
  edges: Edge[];
};
interface CustomNodeData {
  id: string;
  label: string;
  [key: string]: unknown;
}

export type { FlowProps, CustomNodeData };
