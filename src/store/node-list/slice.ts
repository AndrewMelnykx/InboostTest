import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlowNode, FlowEdge, FlowState } from "@store/types";
import { initialNodeFlowData } from "@components/node-tools/SavedFlow";

const updateFilteredNodes = (state: FlowState) => {
  state.filteredNodes = state.flowNodes;
};

const nodeFlowSlice = createSlice({
  name: "nodeFlowSlice",
  initialState: initialNodeFlowData,
  reducers: {
    addNode: (state, action: PayloadAction<FlowNode>) => {
      const newNode = action.payload;
      state.flowNodes.push(newNode);
      updateFilteredNodes(state);
    },

    addEdge: (state, action: PayloadAction<FlowEdge>) => {
      const newEdge = action.payload;
      state.flowEdges.push(newEdge);
    },
    clearAllNodes: (state) => {
      state.flowNodes = [];
      state.flowEdges = [];
      updateFilteredNodes(state);
      localStorage.removeItem("savedFlow");
    },

    updateNodePosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>
    ) => {
      const { id, position } = action.payload;
      const node = state.flowNodes.find((n) => n.id === id);
      if (node) {
        node.position = position;
      }
    },
    updateNodeLabel: (state, action) => {
      const { id, value } = action.payload;
      const node = state.flowNodes.find((n) => n.id === id);
      if (node) {
        node.data.label = value;
      }
    },
    setSelectedNode: (state, action: PayloadAction<string>) => {
      state.selectedNodeId = action.payload;
    },
  },
});

export const {
  addNode,
  addEdge,
  clearAllNodes,
  updateNodePosition,
  updateNodeLabel,
  setSelectedNode,
} = nodeFlowSlice.actions;

export default nodeFlowSlice.reducer;
