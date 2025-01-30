import { useState, useCallback, useMemo } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnNodeDrag,
  type NodeTypes,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
} from "@xyflow/react";
import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";

import "@xyflow/react/dist/style.css";
import LevelNode from "./LevelNode";
import TopicNode from "./TopicNode";

const rfStyle = {};
const onNodeDrag: OnNodeDrag = (_, node) => {
  console.log("drag event", node.data);
};
const nodeColor = (node: Node) => {
  switch (node.type) {
    case "levelNode":
      return "#191a23";
    case "topicNode":
      return "#f3f3f3";
    default:
      return "#f3f3f3";
  }
};
export function RoadmapComponent() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const defaultEdgeOptions = { animated: true, type: "smoothstep" };
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const nodeTypes = {
    levelNode: LevelNode,
    topicNode: TopicNode,
  };
  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        nodeTypes={nodeTypes}
        fitView
        defaultEdgeOptions={defaultEdgeOptions}
        style={rfStyle}
      >
        <Background />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={nodeColor}
          nodeBorderRadius={10}
          maskColor="#f3f3f3"
        />
      </ReactFlow>
    </div>
  );
}
