import { useMemo, useState } from "react";
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
import icon from "../assets/home.png";
import { useNavigate } from "react-router";
const { Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [keyContent, setKeyContent] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const content = () => {
    switch (keyContent) {
      case "1":
        return <MyDocuments />;
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
          <div className="flex items-center gap-2 p-[20px] justify-start w-full">
            <img src={icon} alt="" className="w-[30px] h-[30px]" />
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
  const navigate = useNavigate()
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
      title: "LAST MODIFIED",
      dataIndex: "lastModified",
      key: "lastModified",
      sorter: (a, b) => a.dateCreated.length - b.dateCreated.length,
    },
    {
      title: "Actions",
      dataIndex: "status",
      key: "status",
      render: (t, record) =>
        <div className="flex gap-2">
            <Button className="bg-[#375fa9] text-white" onClick={() => {
              console.log(record);
              navigate(`/diagram/${record.id}`)
            }}>Edit</Button>
          </div>
    },
  ];

  const dataSource = useMemo(() => {
    const savedData = JSON.parse(localStorage.getItem('diagrams') || '[]')
    return savedData.map(item => ({...item, type: "Flowchart", }))
  }, [])

  return (
    <div className="bg-white  rounded-md shadow-xl">
      <div className="flex justify-between px-[30px] pt-[20px] mb-[10px]">
        <div className="text-[16px] font-bold	">My Documents</div>
        <div className="flex gap-[10px]">
          <Input placeholder="Search" prefix={<SearchOutlined />} />
          <Button
            icon={<PlusOutlined color="#fff" />}
            className="bg-[#37a97d] text-white"
            onClick={() => navigate("/diagram")}
          >
            New Document
          </Button>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

const ContentTest = () => {
  return <div>Content</div>;
};

export default Dashboard;
