import { RootState } from "../index";

const allNodesSelector = (state: RootState) => state.nodesData.flowNodes;
const allEdgesSelector = (state: RootState) => state.nodesData.flowEdges;
const filteredNodesSelector = (state: RootState) =>
  state.nodesData.filteredNodes;
const currentNodeSelector = (state: RootState) =>
  state.nodesData.selectedNodeId;

export {
  allNodesSelector,
  allEdgesSelector,
  filteredNodesSelector,
  currentNodeSelector,
};
