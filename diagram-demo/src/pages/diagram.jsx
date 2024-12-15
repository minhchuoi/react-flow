import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {
  ZoomInOutlined,
  ZoomOutOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log(edges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="flex px-4 py-2 bg-[#f1f3f3] border-1	border-[#dadce0] border-solid	gap-[15px]">
          <Button
            onClick={() => {}}
            icon={<ZoomInOutlined className="text-xl" />}
          />
          <Button
            onClick={() => {}}
            icon={<ZoomOutOutlined className="text-xl" />}
          />
          <Button
            onClick={() => {}}
            icon={<DeleteOutlined className="text-xl" />}
          />
          <Button
            onClick={() => {}}
            icon={<ArrowLeftOutlined className="text-xl" />}
          />
          <Button
            onClick={() => {}}
            icon={<ArrowRightOutlined className="text-xl" />}
          />
        </div>
        <div className="flex h-full">
          <div className=" bg-[#f1f3f3] border-[#dadce0] border-solid	flex flex-col p-2 h-full gap-4">
            <Button onClick={() => {}} icon={<PlusSquareOutlined />}>
              Add Node
            </Button>
            <div className="border-t-0 border-[#dadce0] border-solid"></div>
            <div className="flex flex-wrap gap-3 ">
              <div className="w-[30px] h-[15px]	 border-solid cursor-pointer"></div>
              <div className="w-[30px] h-[15px]	 border-solid rounded cursor-pointer"></div>
              <div className="w-[30px] h-[15px]	 border-solid rounded-[50%] cursor-pointer"></div>
              <div className="w-[30px] h-[30px]	 border-solid rounded-[50%] cursor-pointer"></div>
            </div>
          </div>
          <div className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}
