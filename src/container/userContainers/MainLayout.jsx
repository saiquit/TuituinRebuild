import React, { useState } from "react";
import { Layout, Spin } from "antd";
import MainFooter from "./MainFooter";

const MainContent = React.lazy(() => import("./MainContent"));
const MainHeader = React.lazy(() => import("./MainHeader"));
const SideBar = React.lazy(() => import("./MainSidebar"));

const MainLayout = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <React.Suspense fallback={<Spin />}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* SideBar */}
        <SideBar user={user} collapsed={collapsed} onCollapse={onCollapse} />
        <Layout className="site-layout">
          {/* Main Header */}
          <MainHeader />
          {/* Main Content */}
          <MainContent user={user} />
          {/* Main Footer  */}
          <MainFooter />
        </Layout>
      </Layout>
    </React.Suspense>
  );
};
export default MainLayout;
