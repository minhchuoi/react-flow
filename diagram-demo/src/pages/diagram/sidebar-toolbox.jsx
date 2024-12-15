import React, { useState } from "react";
import { Button } from "antd";
import {
  PlusSquareOutlined,
} from "@ant-design/icons";
import clsx from "clsx";

export default function SidebarToolbox({setNodes}) {

  const [currentNodeType, setCurrentNodeType] = useState("rectangular")

  return <div className=" bg-[#f1f3f3] border-[#dadce0] border-solid	flex flex-col p-2 h-full gap-4">
  <Button onClick={() => setNodes(current => [...current, { id: (current.length + 1).toString(), position: { x: 0, y: 100 }, data: { label: (current.length + 1).toString() }, type: "main" }])} icon={<PlusSquareOutlined />}>
    Add Node
  </Button>
  <div className="border-t-0 border-[#dadce0] border-solid"></div>
  <div className="flex flex-wrap gap-3">
    <div className={clsx("p-2 rounded", currentNodeType === "rectangular" ? "bg-blue-300" : "hover:bg-blue-200")}>
      <div className="w-[30px] h-[15px]	 border-solid cursor-pointer" title="rectangular"></div>
    </div>
    <div className="p-2 hover:bg-blue-200 rounded">
      <div className="w-[15px] h-[15px]	 border-solid cursor-pointer" title="square"></div>
    </div>
    <div className="p-2 hover:bg-blue-200 rounded">
      <div className="w-[30px] h-[15px]	 border-solid rounded-[50%] cursor-pointer" title="oval"></div>
    </div>
    <div className="p-2 hover:bg-blue-200 rounded">
      <div className="w-[30px] h-[30px]	 border-solid rounded-[50%] cursor-pointer" title="circle"></div>
    </div>
  </div>
</div>
}