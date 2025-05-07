import { useEffect } from "react";
import {
  Connection,
  Edge,
  NodeChange,
  ReactFlow,
  useReactFlow,
} from "@xyflow/react";
import { FlowProps } from "./types";
import {
  addNode,
  addEdge,
  updateNodePosition,
  clearAllNodes,
} from "@store/node-list/slice";
import { UseStoreDispatcher } from "@store/index";
import { FlowNode } from "@store/types";
import {
  createChildNode,
  createGroupNode,
  createTextNode,
} from "./helper-functions";
import { useSelector } from "react-redux";
import { allEdgesSelector, allNodesSelector } from "@store/node-list/selectors";

const useCenterFlow = (): void => {
  const { fitView } = useReactFlow();
  useEffect(() => {
    fitView();
  }, []);
};

const FlowContent = ({ nodes, edges }: FlowProps) => {
  useCenterFlow();
  return <ReactFlow nodes={nodes} edges={edges} fitView />;
};

const useFlowCustomDispatcher = () => {
  const dispatch = UseStoreDispatcher();
  const allNodes = useSelector(allNodesSelector);
  const allEdges = useSelector(allEdgesSelector);

  const handleAddNode = () => dispatch(addNode(createTextNode()));

  const handleAddGroup = () => dispatch(addNode(createGroupNode()));

  const handleAddChildNode = () => {
    allNodes
      .filter((node: FlowNode) => node.type === "group")
      .forEach((groupNode) => dispatch(addNode(createChildNode(groupNode.id))));
  };

  const handleElementsRemove = () => dispatch(clearAllNodes());

  const handleOnNodesChange = (changes: NodeChange[]) => {
    changes.forEach((change) => {
      if (change.type === "position" && change.position) {
        dispatch(
          updateNodePosition({ id: change.id, position: change.position })
        );
      }
    });
  };

  const handleOnNodeDragStop = (_event: any, node: FlowNode) => {
    dispatch(updateNodePosition({ id: node.id, position: node.position }));
  };
  const handleSavingView = () => {
    const flow = {
      allNodes,
      allEdges,
    };
    localStorage.setItem("savedFlow", JSON.stringify(flow));
  };

  const onConnect = (params: Connection) => {
    const newEdge: Edge = {
      id: `e-${params.source}-${params.target}`,
      source: params.source,
      target: params.target,
      style: { stroke: "#000" },
      animated: true,
    };
    dispatch(addEdge(newEdge));
  };

  return {
    handleAddNode,
    handleAddGroup,
    handleAddChildNode,
    handleElementsRemove,
    handleOnNodesChange,
    handleOnNodeDragStop,
    onConnect,
    handleSavingView,
  };
};
export { useFlowCustomDispatcher };
export default FlowContent;
