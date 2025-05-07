import React from "react";
import { ReactFlowProvider, ReactFlow } from "@xyflow/react";
import { useFlowCustomDispatcher } from "@helpers/custom-hooks";
import { useSelector } from "react-redux";
import { allEdgesSelector, allNodesSelector } from "@store/node-list/selectors";

import "./index.scss";
import { nodeTypes } from "./CustomNode";
import { edgeTypes } from "./CustomEdges";

const NodeFlowCanvas: React.FC = () => {
  const { onConnect, handleOnNodesChange, handleOnNodeDragStop } =
    useFlowCustomDispatcher();

  const allNodes = useSelector(allNodesSelector);
  const allEdges = useSelector(allEdgesSelector);
  return (
    <div className="flow-main-element-wrapper">
      <ReactFlowProvider>
        <ReactFlow
          nodes={allNodes}
          edges={allEdges}
          onConnect={onConnect}
          onNodesChange={handleOnNodesChange}
          onNodeDragStop={handleOnNodeDragStop}
          nodesDraggable={true}
          zoomOnScroll={false}
          fitView
          snapToGrid={true}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default NodeFlowCanvas;
