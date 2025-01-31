import { useCallback, useState } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

export type TopicNode = Node<
  {
    label: string;
    hasSource: boolean;
  },
  "topicNode"
>;

function TopicNode(props: NodeProps<TopicNode>) {
  const [label, setText] = useState(props.data.label);
  const [hasSource, setHasSource] = useState(props.data.hasSource);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="font-grotesk  min-w-28 text-center text-xl bg-gray p-4 rounded-xl border border-dark shadow-[0px_5px_0px_#191a23] subpixel-antialiased">
        <label htmlFor="text">{label}</label>
      </div>
      {hasSource && <Handle type="source" position={Position.Bottom} id="a" />}
    </>
  );
}

export default TopicNode;
