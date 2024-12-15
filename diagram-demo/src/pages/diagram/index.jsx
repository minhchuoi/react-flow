import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  MiniMap,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons"
import Sidebar from './sidebar';
import { DnDProvider, useDnD } from '../../context/DnDContext';
import UtilityBar from './utility-bar';
import { DiagramStyleProvider, useDiagramStyle } from '../../context/DiagramStyleContext';
import { Button, Input } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { useLayoutEffect } from 'react';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();
  const [style, setStyle] = useDiagramStyle()
  const [documentTitle, setDocumentTitle] = useState('New Untitled Diagram')
  const params = useParams();

  useEffect(( ) => {
    if (params.id) {
      const savedData= JSON.parse(localStorage.getItem('diagrams') || '[]')
      const data = savedData.find(item => item.id === params.id)
      if (data) {
        setDocumentTitle(data.title)
        setNodes(data.nodes)
        setEdges(data.edges)
        setStyle({edgeColor: data.style.edgeColor || '#000', nodeTextColor: data.style.nodeTextColor || '#000'})
      }
    }
  }, [params.id])

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((nds) => {
        const newNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node`, order: id },
          style: {
            color: style.nodeTextColor,
          }
        }
        return nds.concat(newNode)
      });
    },
    [screenToFlowPosition, type],
  );

  useEffect(() => {
    if (style.edgeColor) {
      setEdges(current => current.map(edge => ({
        ...edge, style: {
          stroke: style.edgeColor,
        }
      })))
    }
    if (style.nodeTextColor) {
      setNodes(current => current.map(node => ({
        ...node, style: {
          color: style.nodeTextColor
        }
      })))
    }
  }, [style])
  const navigate = useNavigate()

  const onSaveData = () => {
    const newData = {
      id: params.id || new Date().getTime().toString(),
      title: documentTitle,
      nodes,edges,
      style: {
        edgeColor: style.edgeColor,
        nodeTextColor: style.nodeTextColor,
      },
      lastModified: new Date().toLocaleString()
    }
    const savedData = JSON.parse(localStorage.getItem('diagrams') || '[]')
    const dataExist = savedData.find(item => item.id === newData.id)
    if (!dataExist) {
      savedData.push(newData)
    }
    localStorage.setItem('diagrams', JSON.stringify(savedData.map(data => {
      if (data.id === newData.id) {
        return newData
      }
      return data;
    })))
    navigate('/dashboard')
  }

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex items-center justify-between border-0 border-b border-solid px-6 py-2'>
        <div className='flex gap-x-2 items-center'>
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/dashboard')} />
          <Input value={documentTitle} className='w-[600px]' onChange={(e) => setDocumentTitle(e.target.value)} />
        </div>
        <Button type="primary" icon={<SaveOutlined />} onClick={onSaveData}>Save</Button>
      </div>
      <div className="dndflow">
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            style={{ backgroundColor: "#F7F9FB" }}
            snapGrid={[30, 30]}
            snapToGrid
            defaultEdgeOptions={{
              style: {
                stroke: style.edgeColor
              }
            }}
          >
            <Controls />
            <Background />
            <MiniMap />
          </ReactFlow>
        </div>
        <UtilityBar />
      </div>
    </div>
  );
};

export default function Diagram() {
  return (
    <DiagramStyleProvider>
      <ReactFlowProvider>
        <DnDProvider>
          <DnDFlow />
        </DnDProvider>
      </ReactFlowProvider></DiagramStyleProvider>
  )
};