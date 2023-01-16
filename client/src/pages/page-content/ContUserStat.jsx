import React from "react";


const playerStyle = {
    color: "#ffffff",
    textAlign: "center",
}

export default function ContUserStat() {
  return (
      <div style={ playerStyle } className="userStat">
          <h3 className="playerName">Player Name</h3>
          <h4>Level 10</h4>
    </div>
  );
}
