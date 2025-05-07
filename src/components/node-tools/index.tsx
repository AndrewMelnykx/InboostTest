import { Button, Paper } from "@mui/material";
import "./index.scss";

import { useSelector } from "react-redux";
import {
  allNodesSelector,
  currentNodeSelector,
} from "@store/node-list/selectors";
import { useFlowCustomDispatcher } from "@helpers/custom-hooks";
import NodeInfo from "./NodeInfo";

const ToolBar = () => {
  const allNodes = useSelector(allNodesSelector);
  const selectedNodeId = useSelector(currentNodeSelector);
  const {
    handleAddNode,
    handleElementsRemove,
    handleAddGroup,
    handleAddChildNode,
    handleSavingView,
  } = useFlowCustomDispatcher();

  const selectedNode = allNodes.find((node) => node.id === selectedNodeId);

  return selectedNode ? (
    <NodeInfo id={selectedNodeId} label={selectedNode.data.label} />
  ) : (
    <div className="tool-bar-wrapper">
      <Paper elevation={3} className="toolbar-paper">
        <Button variant="outlined" onClick={handleAddNode}>
          ➕ Add Node
        </Button>
        <Button
          variant="outlined"
          onClick={handleElementsRemove}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          🗑️ Delete
          <span style={{ marginLeft: "25px" }}>Node</span>
        </Button>
        <Button variant="outlined" onClick={handleAddGroup}>
          📂 Add Group
        </Button>
        <Button variant="outlined" onClick={handleAddChildNode}>
          🧷 Add child
        </Button>
        <Button variant="outlined" onClick={handleSavingView}>
          💾 Save View
        </Button>
        <Button variant="outlined" onClick={handleElementsRemove}>
          🔄 Reset View
        </Button>
      </Paper>
    </div>
  );
};

export default ToolBar;
