import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const playerStyle = {
    color: "#ffffff",
    textAlign: "center",
}

export default function ContUserStat() {
  return (
      <div style={ playerStyle } className="userStat">
      <Avatar
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }}
        icon={<AntDesignOutlined />}
      />
          <h3 className="playerName">Player Name</h3>
          <h4>Level 10</h4>
    </div>
  );
}
