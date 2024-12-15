import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  DeleteOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import MainNode from "../../components/custom-nodes/main";
import "./index.css"
import SidebarToolbox from "./sidebar-toolbox";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" }, type: 'main' },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" }, type: 'main' },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = {
  main: MainNode
}

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="flex px-4 py-2 bg-[#f1f3f3] border-1	border-[#dadce0] border-solid	gap-[15px]">
          <Button
            onClick={() => { }}
            icon={<ZoomInOutlined className="text-xl" />}
          />
          <Button
            onClick={() => { }}
            icon={<ZoomOutOutlined className="text-xl" />}
          />
          <Button
            onClick={() => { }}
            icon={<DeleteOutlined className="text-xl" />}
          />
          <Button
            onClick={() => { }}
            icon={<ArrowLeftOutlined className="text-xl" />}
          />
          <Button
            onClick={() => { }}
            icon={<ArrowRightOutlined className="text-xl" />}
          />
        </div>
        <div className="flex h-full">
          <SidebarToolbox setNodes={setNodes} />
          <div className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              snapToGrid
              snapGrid={[30, 30]}
              defaultViewport={{x: 0, y: 0, zoom: 1.5}}
              elevateEdgesOnSelect
              elevateNodesOnSelect
              fitView
            >
              <Controls />
              <MiniMap />
              <Background variant={BackgroundVariant.Cross} gap={12} size={1} />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
}
