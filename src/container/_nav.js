import React from "react";
import {
  HomeOutlined,
  OrderedListOutlined,
  UserOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

export const tutorNav = [
  {
    key: 1,
    name: "Dashboard",
    to: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: 2,
    name: "Jobs",
    to: "/dashboard/jobs",
    icon: <OrderedListOutlined />,
  },
  {
    key: 3,
    name: "Profile",
    to: "/dashboard/profile",
    icon: <UserOutlined />,
  },
];

export const guardianNav = [
  {
    key: 1,
    name: "Dashboard",
    to: "/dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: 2,
    name: "Tutor Request",
    to: "/dashboard/request",
    icon: <OrderedListOutlined />,
  },
  {
    key: 3,
    name: "Posted Jobs",
    to: "/dashboard/posted",
    icon: <PaperClipOutlined />,
  },
];
