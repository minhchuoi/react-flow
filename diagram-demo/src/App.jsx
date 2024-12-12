import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Select, Table, Input } from "antd";
// import { icon } from "./assets";
const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [keyContent, setKeyContent] = useState("1");
  const content = () => {
    switch (keyContent) {
      case "1":
        return <MyDocuments />;
      case "2":
        return <ContentTest />;
      case "3":
        return <ContentTest />;
      case "4":
        return <ContentTest />;
      case "5":
        return <ContentTest />;
      case "6":
        return <ContentTest />;
      default:
        break;
    }
    return <MyDocuments />;
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        width={"260px"}
        collapsedWidth={"110px"}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 p-[20px] justify-between w-full">
            <img src={''} alt="" className="w-[30px] h-[30px]" />
            <div className="rounded-sm bg-[#8990a4] p-1 text-[8px]">PRO</div>
          </div>
          {!collapsed && ( 
            <Select
              defaultValue="All apps"
              style={{ width: 120 }}
              options={[{ value: "All apps", label: "All apps" }]}
              className="mr-[20px]"
            />
          )}
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          value={keyContent}
          onSelect={(value) => {
            setKeyContent(value.key);
          }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "My Documents",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Shared with me",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Templates",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "Trash",
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: "Send Feedback",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="py-[50px] mx-[16px] px-[25px] rounded-xl h-screen">
          <div></div>
          {content()}
        </Content>
      </Layout>
      <Button
        // type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-[20px] left-[10px] border-2	"
      >
        Menu
      </Button>
    </Layout>
  );
};

const MyDocuments = () => {
  return (
    <div className="bg-white  rounded-md shadow-xl">
      <div className="flex justify-between px-[30px] pt-[20px] mb-[10px]">
        <div className="text-[16px] font-bold	">My Documents</div>
        <div className="flex gap-[10px]">
          <Input placeholder="Search" prefix={<SearchOutlined />} />
          <Button
            icon={<PlusOutlined color="#fff" />}
            className="bg-[#37a97d] text-white"
          >
            New Document
          </Button>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    title: "New CI Tasks APIs Architecture",
    type: "Flowchart",
    dateCreated: "Nov 21, 2023",
    lastModified: "a year ago",
    status: true,
  },
  {
    key: "1",
    title: "Old CI Tasks Works Flow",
    type: "Flowchart",
    dateCreated: "Nov 16, 2023",
    lastModified: "a year ago",
    status: false,
  },
];

const columns = [
  {
    title: "TITLE",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
    sorter: (a, b) => a.type.length - b.type.length,
  },
  {
    title: "DATE CREATED",
    dataIndex: "dateCreated",
    key: "dateCreated",
    sorter: (a, b) => a.dateCreated.length - b.dateCreated.length,
  },
  {
    title: "LAST MODIFIED",
    dataIndex: "lastModified",
    key: "lastModified",
    sorter: (a, b) => a.dateCreated.length - b.dateCreated.length,
  },
  {
    title: "",
    dataIndex: "status",
    key: "status",
    render: (t, record) =>
      record.status ? (
        <div className="flex gap-2">
          <Button className="bg-[#375fa9] text-white">Share</Button>
          <Button className="bg-[#6a6a6a] text-white">More</Button>
        </div>
      ) : (
        <div />
      ),
  },
];

const ContentTest = () => {
  return <div>Content</div>;
};

export default App;