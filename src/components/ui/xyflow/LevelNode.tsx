import { useCallback, useState } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type LevelNode = Node<
  {
    text: string;
    hasTarget: boolean;
  },
  "levelNode"
>;

function LevelNode(props: NodeProps<LevelNode>) {
  const [text, setText] = useState(props.data.text);
  const [hasTarget, setHasTarget] = useState(props.data.hasTarget);

  return (
    <>
      {hasTarget && <Handle type="target" position={Position.Top} />}
      <div className="font-grotesk  text-center p-4 rounded-xl border-2 border-gray shadow-[0px_5px_0px_#f3f3f3] text-gray bg-dark font-medium text-xl subpixel-antialiased oldstyle-nums">
        <label htmlFor="text">{text}</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default LevelNode;
