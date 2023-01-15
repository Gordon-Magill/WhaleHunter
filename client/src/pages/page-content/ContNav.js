import React from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: <a href="/harbor">Harbor</a>,
    key: "harbor",
    icon: <MailOutlined />,
  },
  {
    label: <a href="/gallery">Gallery</a>,
    key: "gallery",
    icon: <AppstoreOutlined />,
  },
  {
    label: <a href="/logout">Log Out</a>,
    key: "logout",
    icon: <SettingOutlined />,
  },
];

export default function ContNav() {
  const [current, setCurrent] = useState("gallery");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
