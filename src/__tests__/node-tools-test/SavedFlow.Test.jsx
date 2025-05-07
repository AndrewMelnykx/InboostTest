import { loadSavedFlow } from "../../components/node-tools/SavedFlow";

describe("loadSavedFlow", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should return default flow state when no saved data exists", () => {
    const result = loadSavedFlow();
    expect(result).toEqual({
      flowNodes: [],
      flowEdges: [],
      filteredNodes: [],
      selectedNodeId: "",
    });
  });

  test("should return parsed flow data when valid saved data exists", () => {
    const mockData = {
      allNodes: [{ id: "1", label: "Node 1" }],
      allEdges: [{ source: "1", target: "2" }],
    };
    localStorage.setItem("savedFlow", JSON.stringify(mockData));

    const result = loadSavedFlow();
    expect(result).toEqual({
      flowNodes: mockData.allNodes,
      flowEdges: mockData.allEdges,
      filteredNodes: mockData.allNodes,
      selectedNodeId: "",
    });
  });

  test("should return default flow state when saved data is invalid", () => {
    localStorage.setItem("savedFlow", "invalid JSON");

    const result = loadSavedFlow();
    expect(result).toEqual({
      flowNodes: [],
      flowEdges: [],
      filteredNodes: [],
      selectedNodeId: "",
    });
  });
});
