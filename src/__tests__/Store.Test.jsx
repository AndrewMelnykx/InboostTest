import nodeFlowReducer, {
  addNode,
  addEdge,
  clearAllNodes,
  updateNodePosition,
  updateNodeLabel,
  setSelectedNode,
} from "../../store/node-list/slice";
import { FlowNode, FlowEdge } from "../store/types";

describe("nodeFlowSlice Reducer", () => {
  let initialState: FlowState;

  beforeEach(() => {
    localStorage.clear();
    initialState = {
      flowNodes: [],
      flowEdges: [],
      filteredNodes: [],
      selectedNodeId: "",
    };
  });

  test("adds a new node", () => {
    const newNode: FlowNode = {
      id: "1",
      data: { label: "Test Node" },
      position: { x: 100, y: 100 },
    };
    const newState = nodeFlowReducer(initialState, addNode(newNode));

    expect(newState.flowNodes.length).toBe(1);
    expect(newState.flowNodes[0]).toEqual(newNode);
  });

  test("adds a new edge", () => {
    const newEdge: FlowEdge = { id: "e1", source: "1", target: "2" };
    const newState = nodeFlowReducer(initialState, addEdge(newEdge));

    expect(newState.flowEdges.length).toBe(1);
    expect(newState.flowEdges[0]).toEqual(newEdge);
  });

  test("updates node position", () => {
    const node: FlowNode = {
      id: "1",
      data: { label: "Test Node" },
      position: { x: 100, y: 100 },
    };
    const stateWithNode = nodeFlowReducer(initialState, addNode(node));

    const updatedState = nodeFlowReducer(
      stateWithNode,
      updateNodePosition({ id: "1", position: { x: 200, y: 200 } })
    );
    expect(updatedState.flowNodes[0].position).toEqual({ x: 200, y: 200 });
  });

  test("updates node label", () => {
    const node: FlowNode = {
      id: "1",
      data: { label: "Old Label" },
      position: { x: 100, y: 100 },
    };
    const stateWithNode = nodeFlowReducer(initialState, addNode(node));

    const updatedState = nodeFlowReducer(
      stateWithNode,
      updateNodeLabel({ id: "1", value: "Updated Label" })
    );
    expect(updatedState.flowNodes[0].data.label).toBe("Updated Label");
  });

  test("clears all nodes and localStorage", () => {
    localStorage.setItem(
      "savedFlow",
      JSON.stringify({ allNodes: [{ id: "1", data: { label: "Test Node" } }] })
    );
    const newState = nodeFlowReducer(initialState, clearAllNodes());

    expect(newState.flowNodes).toEqual([]);
    expect(newState.flowEdges).toEqual([]);
    expect(localStorage.getItem("savedFlow")).toBeNull();
  });

  test("sets selected node", () => {
    const newState = nodeFlowReducer(initialState, setSelectedNode("1"));
    expect(newState.selectedNodeId).toBe("1");
  });
});
