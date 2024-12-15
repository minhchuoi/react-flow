import { Handle, NodeResizer, Position } from "@xyflow/react";
import React from "react";

export default function MainNode({data, isConnectable}) {
  return <>
    <NodeResizer />
    <div className="flex items-center justify-center w-full h-full">
      <input />
    </div>
    <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
  </>
}