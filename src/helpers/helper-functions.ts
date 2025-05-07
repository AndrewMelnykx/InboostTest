import { nanoid } from "@reduxjs/toolkit";
import { FlowNode } from "@store/types";

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 500),
  y: Math.floor(Math.random() * 500),
});

const createTextNode = (): FlowNode => ({
  id: nanoid(),
  data: { label: "Node" },
  position: getRandomPosition(),
  type: "textUpdater",
});

const createGroupNode = (): FlowNode => ({
  id: `group-${nanoid()}`,
  data: { label: "New Group" },
  position: getRandomPosition(),
  type: "group",
  style: {
    width: 300,
    height: 300,
    border: "none",
    boxShadow: "0.5px 0.5px 0.5px 0.5px black",
    background: "var(--parent-bg-color)",
    color: "white",
  },
});

const createChildNode = (parentId: string): FlowNode => ({
  id: nanoid(),
  data: { label: "Child Node" },
  position: { x: 20, y: 60 },
  parentId,
  extent: "parent",
  type: "textUpdater",
});

export { getRandomPosition, createTextNode, createGroupNode, createChildNode };
