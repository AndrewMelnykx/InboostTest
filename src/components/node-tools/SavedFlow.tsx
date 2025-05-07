import { FlowState } from "@store/types";

const loadSavedFlow = (): FlowState => {
  const saved = localStorage.getItem("savedFlow");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        flowNodes: parsed.allNodes || [],
        flowEdges: parsed.allEdges || [],
        filteredNodes: parsed.allNodes || [],
        selectedNodeId: "",
      };
    } catch (err) {
      console.error("Failed to parse saved flow:", err);
      return {
        flowNodes: [],
        flowEdges: [],
        filteredNodes: [],
        selectedNodeId: "",
      };
    }
  }

  return {
    flowNodes: [],
    flowEdges: [],
    filteredNodes: [],
    selectedNodeId: "",
  };
};

const initialNodeFlowData: FlowState = loadSavedFlow();

export { initialNodeFlowData, loadSavedFlow };
